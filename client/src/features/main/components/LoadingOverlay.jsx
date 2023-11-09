import React from "react";

export const LoadingOverlay = () => {
  return (
    <div className="flex justify-center items-center flex-col text-center text-white h-full">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
    </div>
  );
};
