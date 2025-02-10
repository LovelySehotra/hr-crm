import React from 'react'
import { Link } from "react-router-dom";
import Chat from "../../assets/Chat/Chat.png";
import Status from "../../assets/Chat/Status.png";
import Channel from "../../assets/Chat/Channel.png";
import Profile from "../../assets/TopBar/Profile.png"
import "./ChatSIdeBar.css"
const ChatSIdeBar = () => {
  return (
    <main className='main_box'>
      <div className="chat_sidebar">
        <div className="chat_sidebar_top">
          <div className='box_icon'> 
            <Link to="/home"><img src={Chat} alt="" /></Link>
          </div>
          <div className='box_icon '>

            <Link to="/home"><img src={Status} alt="" /></Link>
          </div>
          <div className='box_icon '>

          <Link to="/home"><img src={Channel} alt="" /></Link>
          </div>
        </div>
        <div className='chat_sidebar_bottom'>
          <div className='box_icon '>

          <Link to="/home"><img src={Profile} alt="" /></Link>
          </div>
          <div className='box_icon '> 

          <Link to="/home"><img src={Channel} alt="" /></Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ChatSIdeBar