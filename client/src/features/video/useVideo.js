import { createContext, useRef } from "react";
import { useDispatch } from "react-redux";
import { setLoading, setStarted } from "../main/mainSlice";

export const VideoProvider = createContext();

export const useVideo = () => {
  const dispatch = useDispatch();
  const localStream = useRef();

  async function startVideoStream() {
    dispatch(setLoading(true));
    try {
      const videoStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      localStream.current.srcObject = videoStream;
    } catch (error) {
      // console.log(error);
    }
    dispatch(setLoading(false));
    dispatch(setStarted(true));
  }

  async function stopVideoStream() {
    try {
      localStream.current.srcObject
        .getTracks()
        .forEach((track) => track.stop());
      localStream.current.load();
      localStream.current.srcObject = null;
    } catch (error) {
      // console.log(error);
    }

    dispatch(setStarted(false));
  }

  return { localStream, startVideoStream, stopVideoStream };
};
