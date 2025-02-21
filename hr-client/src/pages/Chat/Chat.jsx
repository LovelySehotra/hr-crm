import React, { useEffect } from 'react'
import ChatSIdeBar from '../../components/ChatSideBar/ChatSIdeBar'
import ChatListItem from '../../components/ChatListItem/ChatListItem'
import ChatHeader from '../../components/ChatHeader/ChatHeader'
import './Chat.css'
import ChatBox from '../../features/ChatBox/ChatBox'
import { useDispatch } from 'react-redux'
import { getUserDetail } from '../../redux/slices/AuthSlice'
import socket from '../../config/Socket'

const Chat = () => {
  const dispatch = useDispatch()
  const [message, setMessage] = useState("");
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
  const sendMessage = ()=>{
    if (message === "") return;
    const Message = {
      me: SUserProfile?._id,
      to: SActiveChat?._id,
      message: {
        file: {
          type: UFiles.fileType ? UFiles.fileType : "text",
          data: UFiles.data ? UFiles.data : "text",
        },
        text: message,
        links: extractLinks(message),
      },
      replyMessage: {
        to: props.replyMessage.data?.sender._id,
        message: props.replyMessage.data?.message,
      },
    };
    socket.emit("sendMessage", Message);
    setMessage("");
  }

  useEffect(() => {
    getUser()
  }, [dispatch])
  return (
    <div>
      <ChatSIdeBar>
        <div className='sectionOne'>
          <div className='subSection'>

            <ChatHeader backgroundColor=' rgb(32, 44, 51)' />
            <div className='chatlistBox'>

              <ChatListItem />
              <ChatListItem />
              <ChatListItem />
              <ChatListItem />
              <ChatListItem />
              <ChatListItem />
              <ChatListItem />
              <ChatListItem />
              <ChatListItem />
              <ChatListItem />
              <ChatListItem />
              <ChatListItem />
            </div>
          </div>
          <div className='chatBoxSection'>
            <ChatBox />
          </div>
        </div>
      </ChatSIdeBar>

    </div>
  )
}

export default Chat
