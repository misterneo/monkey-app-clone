import React from "react";
import { BiMessageAltError } from "react-icons/bi";

export const ErrorOverlay = ({ message }) => {
  return (
    <div className="flex justify-center items-center flex-col text-center text-white h-full">
      <BiMessageAltError className="sm:text-8xl text-6xl text-red-500" />
      <div className="text-xs md:text-sm mt-4">
        {message === "default"
          ? "Something went wrong, please try again."
          : message}
      </div>
      <button
        onClick={() => window.location.reload()}
        className="mt-6 bg-white text-black px-5 py-2 rounded-full sm:text-sm text-xs"
      >
        Try Again
      </button>
    </div>
  );
};
