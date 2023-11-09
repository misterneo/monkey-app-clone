import React, { useContext } from "react";
import { ImPhoneHangUp } from "react-icons/im";
import { VideoProvider } from "../useVideo";

export const EndCallButton = () => {
  const { stopVideoStream } = useContext(VideoProvider);
  return (
    <button
      onClick={() => stopVideoStream()}
      className="bg-red-600 text-white p-3 rounded-full w-fit self-center opacity-60 hover:opacity-100 hover:scale-110"
    >
      <ImPhoneHangUp size={18} />
    </button>
  );
};
