import React from "react";
import { useSelector } from "react-redux";
import "./ChatList.css";
import ChatListItem from "../../components/ChatListItem/ChatListItem";

const ChatList = ({ handleSetCurrentChat }) => {
  const SActiveChat = useSelector((state) => state.Chat);

  return (
    <div className="chatlistBox">
      {SActiveChat?.allChats?.chats?.length ? (
        SActiveChat.allChats.chats.map((chat, index) => (
          <ChatListItem
            key={index}
            onClick={() => handleSetCurrentChat(chat)}
            name={chat.user.fullName}
            lastMessage={chat?.message?.text}
          />
        ))
      ) : (
        <div className="noChat">No chat</div>
      )}
    </div>
  );
};

export default ChatList;