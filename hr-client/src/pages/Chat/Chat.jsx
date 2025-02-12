import React from 'react'
import ChatSIdeBar from '../../components/ChatSideBar/ChatSIdeBar'
import ChatListItem from '../../components/ChatListItem/ChatListItem'
import ChatHeader from '../../components/ChatHeader/ChatHeader'
import './Chat.css'
import ChatBox from '../../features/ChatBox/ChatBox'

const Chat = () => {
  return (
    <div>
      <ChatSIdeBar>
        <div className='sectionOne'>
          <div>

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
          <div>
            <ChatBox/>
          </div>
        </div>
      </ChatSIdeBar>

    </div>
  )
}

export default Chat
