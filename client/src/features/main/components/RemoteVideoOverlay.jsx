import React from "react";
import { BiSkipNext } from "react-icons/bi";

export const RemoteVideoOverlay = () => {
  return (
    <div className="flex justify-end pb-8 items-center flex-col h-full">
      <button className="bg-primary border-2 text-white p-2 rounded-full w-fit self-center opacity-90 hover:opacity-100 hover:scale-110">
        <BiSkipNext size={26} />
      </button>
    </div>
  );
};
