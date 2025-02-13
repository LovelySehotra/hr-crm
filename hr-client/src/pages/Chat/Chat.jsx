import React, { useEffect } from 'react'
import ChatSIdeBar from '../../components/ChatSideBar/ChatSIdeBar'
import ChatListItem from '../../components/ChatListItem/ChatListItem'
import ChatHeader from '../../components/ChatHeader/ChatHeader'
import './Chat.css'
import ChatBox from '../../features/ChatBox/ChatBox'
import { useDispatch } from 'react-redux'
import { getUserDetail } from '../../redux/slices/AuthSlice'

const Chat = () => {
  const dispatch =  useDispatch()
  const getUser = async()=>{
    const data =  await dispatch(getUserDetail()).unwrap();
    if(data) console.log(data)

  }

  useEffect(()=>{
    getUser()
  },[dispatch])
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
            <ChatBox/>
          </div>
        </div>
      </ChatSIdeBar>

    </div>
  )
}

export default Chat
