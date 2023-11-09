import React from "react";
import { useSelector } from "react-redux";
import { MessageBubble } from "./MessageBubble";

export const MessagesBox = () => {
  const messages = useSelector((state) => state.messaging.messages);
  return (
    <div className="flex flex-1 flex-col-reverse gap-2 overflow-hidden">
      {messages.map((message, index) => {
        return <MessageBubble message={message} key={index} />;
      })}
    </div>
  );
};
