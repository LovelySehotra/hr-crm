import React from "react";
import "./ChatMessage.css";

const ChatMessage = ({ sender, message, timestamp, isCurrentUser = false }) => {
  return (
    <div
      className={`chatMessage ${
        isCurrentUser ? "currentUser" : ""
      }`}
    >
      <div className="hatMessage_sender">{sender}</div>
      <div className="chatMessage_tex">{message}</div>
      <div className="chatMessage_timestamp">{timestamp}</div>
    </div>
  );
};

export default ChatMessage;