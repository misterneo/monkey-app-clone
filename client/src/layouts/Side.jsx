import { VideoPlayer } from "@/features/main/components/VideoPlayer";
import React from "react";

export const Side = ({ videoRef, children, className, isLocal = true }) => {
  return (
    <>
      <div className={`relative landscape:w-1/2 portrait:h-1/2 ${className}`}>
        <VideoPlayer videoRef={videoRef} isLocal={isLocal} muted={isLocal} />
        <div className={`w-full h-full top-0 left-0 absolute z-100`}>
          {children}
        </div>
      </div>
    </>
  );
};
