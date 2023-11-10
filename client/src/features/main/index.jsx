import React from "react";
import { LocalSide } from "./LocalSide";
import { RemoteSide } from "./RemoteSide";
import { VideoProvider } from "@/utils/constants";
import usePeer from "@/utils/usePeer";

const index = () => {
  const values = usePeer();

  return (
    <VideoProvider.Provider value={values}>
      <RemoteSide />
      <LocalSide />
    </VideoProvider.Provider>
  );
};

export default index;
