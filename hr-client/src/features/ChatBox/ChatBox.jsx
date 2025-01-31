import React, { useState } from "react";
// import ChatMessage from "../../components/ChatMessage/ChatMessage.jsx";
// import ChatInput from "./ChatInput";
import "./ChatBox.css";
import ChatMessage from "../../components/ChatMessage/ChatMessage";

const ChatBox = ({ initialMessages = [] }) => {
  const [messages, setMessages] = useState(initialMessages);

  const handleSendMessage = (message) => {
    const newMessage = {
      sender: "You",
      message,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chatBox">
      <div className="chatBox_messages">
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            sender={msg.sender}
            message={msg.message}
            timestamp={msg.timestamp}
            isCurrentUser={msg.sender === "You"}
          />
        ))}
      </div>
      {/* <ChatInput onSendMessage={handleSendMessage} /> */}
    </div>
  );
};

export default ChatBox;