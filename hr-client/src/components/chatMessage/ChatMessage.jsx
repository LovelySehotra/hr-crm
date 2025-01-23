import React, { useState } from "react";
import "./ChatMessage.css"; // Link to the CSS below

const Chatbox = () => {
  const [highlightedMessageId, setHighlightedMessageId] = useState(null);

  const messages = [
    {
      id: 1,
      text: "Parent Message 1",
      replies: [
        { id: 101, text: "First reply to Parent 1" },
        { id: 102, text: "Second reply to Parent 1" },
      ],
    },
    {
      id: 2,
      text: "Parent Message 2",
      replies: [{ id: 201, text: "Reply to Parent 2" }],
    },
  ];

  const handleHighlight = (id) => {
    setHighlightedMessageId(id);
  };

  return (
    <div className="chatbox">
      {messages.map((message) => (
        <div key={message.id} className="message">
          {/* Parent Message */}
          <div className="message-row">
            <div
              className={`node ${
                highlightedMessageId === message.id ? "highlighted" : ""
              }`}
            ></div>
            <p
              onClick={() => handleHighlight(message.id)}
              className={
                highlightedMessageId === message.id ? "highlight-text" : ""
              }
            >
              {message.text}
            </p>
          </div>

          {/* Replies */}
          <div className="replies">
            {message.replies.map((reply) => (
              <div key={reply.id} className="reply-row">
                <div className="line"></div>
                <div className="message-row">
                  <div
                    className={`node ${
                      highlightedMessageId === reply.id ? "highlighted" : ""
                    }`}
                  ></div>
                  <p
                    onClick={() => handleHighlight(reply.id)}
                    className={
                      highlightedMessageId === reply.id ? "highlight-text" : ""
                    }
                  >
                    {reply.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chatbox;
