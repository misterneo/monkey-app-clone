import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { log } from "@/utils/helpers";
import { HEARTBEAT, MESSAGE_EVENTS, WS_URL, peer } from "@/utils/constants";
import { addMessage, clearMessages } from "@/features/messaging/messagingSlice";
import {
  setLoading,
  setStarted,
  setWaitingForMatch,
} from "@/features/main/mainSlice";

export default function usePeer() {
  const dispatch = useDispatch();
  const [myPeerId, setMyPeerId] = useState();

  const localStream = useRef();
  const remoteStream = useRef();

  const peerConnectionRef = useRef();
  const dataConnectionRef = useRef();
  const mediaConnectionRef = useRef();

  const { sendMessage, lastMessage, readyState } = useWebSocket(WS_URL, {
    heartbeat: HEARTBEAT,
  });

  useEffect(() => {
    peer.on("open", (id) => {
      log("Peer open");

      setMyPeerId(id);
    });

    peer.on("connection", (conn) => {
      log("Peer Connected");

      peerConnectionRef.current = conn;
    });

    peer.on("close", () => {
      log("Peer closed");
    });
  }, []);

  useEffect(() => {
    if (lastMessage) {
      const { event, id, isCaller } = JSON.parse(lastMessage.data);
      if (event === MESSAGE_EVENTS.MATCH) {
        dispatch(setWaitingForMatch(false));
        const dataConnection = peer.connect(id);

        if (isCaller) {
          log("Calling...");
          const call = peer.call(id, localStream.current.srcObject);

          call.on("stream", (stream) => {
            remoteStream.current.srcObject = stream;
          });

          call.on("close", () => {
            log("Call closed");
          });

          mediaConnectionRef.current = call;
        }

        peer.on("call", (call) => {
          call.answer(localStream.current.srcObject);

          call.on("stream", (stream) => {
            remoteStream.current.srcObject = stream;
          });

          call.on("close", () => {
            log("Remote Call closed");
          });
        });

        dataConnection.on("open", () => {
          log("Connection open");
        });

        dataConnection.on("data", (data) => {
          const message = {
            text: data,
            isMine: false,
          };
          dispatch(addMessage(message));
        });

        dataConnection.on("close", () => {
          log("Connection closed");
          dispatch(clearMessages());
          sendMessage(
            JSON.stringify({ event: MESSAGE_EVENTS.SKIP, id: myPeerId })
          );
        });

        dataConnectionRef.current = dataConnection;
      }

      if (event === MESSAGE_EVENTS.WAITING) {
        log("Waiting for a match...");

        if (remoteStream.current.srcObject) {
          remoteStream.current.srcObject = null;
        }
        dispatch(setWaitingForMatch(true));
      }
    }
  }, [lastMessage]);

  async function startVideoStream() {
    dispatch(setLoading(true));
    try {
      const videoStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      localStream.current.srcObject = videoStream;
    } catch (error) {}
    dispatch(setLoading(false));
    dispatch(setStarted(true));
  }

  const join = async () => {
    await startVideoStream();
    if (readyState === ReadyState.OPEN) {
      sendMessage(JSON.stringify({ event: MESSAGE_EVENTS.JOIN, id: myPeerId }));
    }
  };

  const skip = () => {
    peerConnectionRef.current.close();
    mediaConnectionRef?.current?.close();
    dataConnectionRef.current.close();

    log("Skipped");
  };

  const send = (e) => {
    e.preventDefault();
    if (!e.target[0].value) return;

    const message = {
      text: e.target[0].value,
      isMine: true,
    };

    e.target[0].value = "";

    if (!peerConnectionRef.current) return;
    peerConnectionRef.current?.send(message.text);
    dispatch(addMessage(message));
  };

  const end = () => {
    window.location.reload();
  };

  return { remoteStream, localStream, join, skip, send, end };
}
