import React, { useEffect, useState } from "react";
import socket from "../../config/Socket";

import "./ChatBox.css";
import { useSelector } from "react-redux";
const ChatBox = ({selectedContact,sendMessage}) => {

  const SActiveChat = useSelector((state) => state.Chat);
  const SUserProfile = useSelector((state) => state.auth.userInfo);
  const [message, setMessage] = useState("");
  const [messageData,setMessageData] = useState([])
   const handlesendMessage = () => {
    
    sendMessage && sendMessage(message)
  };

  useEffect(() => {
    socket.on("initialMessage", (data) => {
      console.log("Received messages:", data);
      setMessageData(data); // Store messages in state
    });

    return () => {
      socket.off("initialMessage"); // Cleanup on unmount
    };
  }, []);
  return (
    <>
        <div className="chat-box">
          <div className="chat-box-header">
            <p>Chat</p>
            <p  style={{ cursor: "pointer" }}>✖</p>
          </div>
          <div className="chat-box-body">
            {messageData && messageData.map((msg, index) => (
              <div
                key={index}
                className={msg.sender === "user" ? "chat-box-body-send" : "chat-box-body-receive"}
              >
                {msg.message.text}
              </div>
            ))}
          </div>
          <div className="chat-box-footer">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
            />
            <button className="send" onClick={handlesendMessage}>➤</button>
          </div>
        </div>
    </>
  );
};

export default ChatBox;
