import React from 'react'
import './ChatListItem.css'

const ChatListItem = ({ name = "Ahaan", lastMessage , time = "9:30", backgroundColor,onClick }) => {
  return (
    <div onClick={onClick} className='chatListItemBox' style={{ backgroundColor: backgroundColor }}>
      <div className='chatListImg'>

        <img className='chatProfile' src="https://images.pexels.com/photos/7315899/pexels-photo-7315899.jpeg" alt="" />
      </div>
      <div className='chatContent'>
        <div >
          <span>{name}</span>
          <br />
          <span>{lastMessage}</span>

        </div>
        <div>
          <p>{time}</p>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default ChatListItem
