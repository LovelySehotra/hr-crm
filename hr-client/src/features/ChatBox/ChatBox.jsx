import React, { useEffect, useState } from "react";

import "./ChatBox.css";
const ChatBox = ({sendMessage,messageData=[]}) => {
  const [message, setMessage] = useState("");
   const handlesendMessage = () => {
    
    sendMessage && sendMessage(message)
  };

  useEffect(() => {
   
}, []);
  return (
    <>
        <div className="chat-box">
          <div className="chat-box-header">
            <p>Chat</p>
            <p  style={{ cursor: "pointer" }}>✖</p>
          </div>
          <div className="chat-box-body">
            {messageData.map((msg, index) => (
              <div
                key={index}
                className={msg.sender === "user" ? "chat-box-body-send" : "chat-box-body-receive"}
              >
                {msg.text}
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
