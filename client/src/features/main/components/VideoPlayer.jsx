import React from "react";

export const VideoPlayer = ({ isLocal = true, videoRef, ...props }) => {
  return (
    <video
      autoPlay
      playsInline
      ref={videoRef}
      className={
        "w-full h-full object-cover absolute top-0 left-0 " +
        (isLocal ? "bg-[#07012c]" : "bg-[#644af1]") +
        (isLocal ? " transform scale-x-[-1]" : "")
      }
      {...props}
    />
  );
};
