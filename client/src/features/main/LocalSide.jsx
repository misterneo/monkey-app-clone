import React, { useContext } from "react";
import { useSelector } from "react-redux";
import ChatOverlay from "../messaging/index";
import { StartVideoChatOverlay } from "./components/StartVideoChatOverlay";
import { LoadingOverlay } from "./components/LoadingOverlay";
import { VideoProvider } from "@/utils/constants";
import { Side } from "@/layouts/Side";
import { ErrorOverlay } from "./components/ErrorOverlay";

export const LocalSide = () => {
  const { localStream } = useContext(VideoProvider);
  const started = useSelector((state) => state.main.started);
  const loading = useSelector((state) => state.main.loading);
  const error = useSelector((state) => state.main.error);

  const renderOverlay = () => {
    if (error) {
      return <ErrorOverlay message={error} />;
    }

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
