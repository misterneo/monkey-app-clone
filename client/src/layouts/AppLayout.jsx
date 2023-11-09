import React from "react";

export const AppLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-gray-500 flex landscape:flex-row flex-col">
      {children}
    </div>
  );
};
