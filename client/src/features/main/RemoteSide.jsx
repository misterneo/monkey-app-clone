import React from "react";
import { useSelector } from "react-redux";
import { Side } from "@/layouts/Side";
import { WelcomeOverlay } from "./components/WelcomeOverlay";
import { LoadingOverlay } from "./components/LoadingOverlay";
import { RemoteVideoOverlay } from "./components/RemoteVideoOverlay";

export const RemoteSide = () => {
  const started = useSelector((state) => state.main.started);
  const loading = useSelector((state) => state.main.loading);

  function renderOverlay() {
    if (loading) {
      return <LoadingOverlay />;
    }

    if (!started) {
      return <WelcomeOverlay />;
    }

    return <RemoteVideoOverlay />;
  }

  return <Side isLocal={false}>{renderOverlay()}</Side>;
};
