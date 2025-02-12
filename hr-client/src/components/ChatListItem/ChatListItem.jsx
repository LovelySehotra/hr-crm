import React from 'react'
import './ChatListItem.css'

const ChatListItem = ({ name = "Ahaan", lastMessage = "You:I am good and what about you..", time = "9:30", backgroundColor }) => {
  return (
    <div className='chatListItemBox' style={{ backgroundColor: backgroundColor }}>
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
