import React, { useEffect, useState } from 'react'
import ChatSIdeBar from '../../components/ChatSideBar/ChatSIdeBar'
import ChatListItem from '../../components/ChatListItem/ChatListItem'
import ChatHeader from '../../components/ChatHeader/ChatHeader'
import './Chat.css'
import ChatBox from '../../features/ChatBox/ChatBox'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetail } from '../../redux/slices/AuthSlice'
import socket from '../../config/Socket'
import { getAllChatsByUser } from '../../redux/slices/ChatSlice'

const Chat = () => {
  const dispatch = useDispatch()
  const [allChat, setAllChat] = useState([])

  const SActiveChat = useSelector((state) => state.currentChat);
  const SUserProfile = useSelector((state) => state.auth.user);
  const getUser = async () => {
    try {

      const data = await dispatch(getUserDetail()).unwrap();

      if (!socket || !socket.connected) {
        console.error("Socket is not connected!");
        return;
      }
      socket.emit("register", data._id);
      socket.emit("status", {
        userId: data._id,
        status: "online",
      });
    } catch (error) {
      console.log(error)
    }
  }
  const getAllUsers = async () => {
    try {
      const { payload } = await dispatch(getAllChatsByUser()).unwrap()
      if (payload) {
        setAllChat(payload)
      }
    } catch (error) {

    }

  }
  const sendMessage = (message) => {
    if (message === "") return;
    const Message = {
      me: SUserProfile?._id,
      to: SActiveChat?._id,
      message: {

        text: message,
        links: extractLinks(message),
      },

    };
    socket.emit("sendMessage", Message);

  }
  const extractLinks = (text) => {
    const urlRegex = /https?:\/\/[^\s/$.?#].[^\s]*/g;

    const urls = text.match(urlRegex);

    return urls || [];
  };
  useEffect(() => {
    // getUser()
    getAllUsers()
  }, [dispatch])
  return (
    <div>
      <ChatSIdeBar>
        <div className='sectionOne'>
          <div className='subSection'>

            <ChatHeader backgroundColor=' rgb(32, 44, 51)' />

            <div className='chatlistBox'>
              {
                allChat.length ? allChat.map((chat) => <ChatListItem />)
                  : <div className='noChat' >No chat</div>
              }

            </div>
          </div>
          <div className='chatBoxSection'>
            <ChatBox sendMessage={(data) => sendMessage(data)} />
          </div>
        </div>
      </ChatSIdeBar>

    </div>
  )
}

export default Chat
