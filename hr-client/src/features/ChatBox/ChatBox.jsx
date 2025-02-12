import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./ChatBox.css";

const socket = io("http://localhost:5174");
const ChatBox = () => {
  const [message, setMessage] = useState("");


  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you?", sender: "bot" },
    { text: "I have a question.", sender: "user" }
  ]);


  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const sendMessage = () => {
    console.log(message)
    socket.emit("sendMessage", { text: message ,sender: "user"});
    setMessage("");
  };

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      console.log(data)
        setMessages((prev) => [...prev, data]);
    });
}, []);
  return (
    <>
        <div className="chat-box">
          <div className="chat-box-header">
            <p>Chat</p>
            <p onClick={toggleChat} style={{ cursor: "pointer" }}>✖</p>
          </div>
          <div className="chat-box-body">
            {messages.map((msg, index) => (
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
            <button className="send" onClick={sendMessage}>➤</button>
          </div>
        </div>
    </>
  );
};

export default ChatBox;
