import React, { useContext } from "react";
import { useSelector } from "react-redux";
import ChatOverlay from "../messaging/index";
import { StartVideoChatOverlay } from "./components/StartVideoChatOverlay";
import { LoadingOverlay } from "./components/LoadingOverlay";
import { VideoProvider } from "../video/useVideo";
import { Side } from "@/layouts/Side";

export const LocalSide = () => {
  const { localStream } = useContext(VideoProvider);
  const started = useSelector((state) => state.main.started);
  const loading = useSelector((state) => state.main.loading);

  const renderOverlay = () => {
    if (loading) {
      return <LoadingOverlay />;
    }

    if (!started) {
      return <StartVideoChatOverlay />;
    }

    return <ChatOverlay />;
  };

  return <Side videoRef={localStream}>{renderOverlay()}</Side>;
};
