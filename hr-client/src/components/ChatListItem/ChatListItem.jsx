import React from 'react'
import './ChatListItem.css'

const ChatListItem = ({name,lastMessage,time}) => {
  return (
    <div className='chatListItemBox'> 
      <img className='chatProfile' src="" alt="" />
      <div className='chatContent'>
        <div >
            <span>Name</span>
            <p>Last::: Message</p>

        </div>
        <div>
            <p>9:30</p>
            <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default ChatListItem
