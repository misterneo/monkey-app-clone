import React from "react";

export const AppLayout = ({ children }) => {
  return (
    <div
      style={{ height: "100svh" }}
      className="w-screen bg-gray-500 flex landscape:flex-row flex-col"
    >
      {children}
    </div>
  );
};
