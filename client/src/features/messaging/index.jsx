import React from "react";
import { EndCallButton } from "../video/components/EndCallButton";
import { MessagesBox } from "./components/MessagesBox";
import { MessageInput } from "./components/MessageInput";

const Index = () => {
  return (
    <div className="flex flex-col h-full p-8 gap-5">
      <EndCallButton />

      <MessagesBox />

      <MessageInput />
    </div>
  );
};

export default Index;
