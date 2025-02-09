import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./ChatBox.css";

const ChatBox = () => {
  const socket = io("http://localhost:5174");

  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you?", sender: "bot" },
    { text: "I have a question.", sender: "user" }
  ]);
  const [inputText, setInputText] = useState("");

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const sendMessage = () => {
    if (inputText.trim() !== "") {
      setMessages([...messages, { text: inputText, sender: "user" }]);
      setInputText("");
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "I'm just a bot, but I'll try my best!", sender: "bot" }
        ]);
      }, 1000);
    }
  };

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
        setMessages((prev) => [...prev, data]);
    });
}, []);
  return (
    <div>
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
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type a message..."
            />
            <button className="send" onClick={sendMessage}>➤</button>
          </div>
        </div>
    </div>
  );
};

export default ChatBox;
