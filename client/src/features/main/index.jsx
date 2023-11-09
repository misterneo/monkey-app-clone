import React from "react";
import { LocalSide } from "./LocalSide";
import { RemoteSide } from "./RemoteSide";
import { VideoProvider, useVideo } from "../video/useVideo";

const index = () => {
  const value = useVideo();
  return (
    <VideoProvider.Provider value={value}>
      <RemoteSide />
      <LocalSide />
    </VideoProvider.Provider>
  );
};

export default index;
