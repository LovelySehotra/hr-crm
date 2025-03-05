import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Chat from '../../assets/Chat/Chat.png';
import Status from '../../assets/Chat/Status.png';
import Channel from '../../assets/Chat/Channel.png';
import Profile from '../../assets/TopBar/Profile.png';
import './ChatSIdeBar.css';
import ChatHeader from '../ChatHeader/ChatHeader';

const ChatSIdeBar = () => {
  return (
    <main className="main_box">
      <div className="chat_sidebar">
        <div className="chat_sidebar_top">
          <div className="box_icon">
            <Link to="/message/chat"><img src={Chat} alt="Chat" /></Link>
          </div>
          <div className="box_icon">
            <Link to="/status"><img src={Status} alt="Status" /></Link>
          </div>
          <div className="box_icon">
            <Link to="/channel"><img src={Channel} alt="Channel" /></Link>
          </div>
        </div>
        <div className="chat_sidebar_bottom">
          <div className="box_icon">
            <Link to="/profile"><img src={Profile} alt="Profile" /></Link>
          </div>
          <div className="box_icon">
            <Link to="/channel"><img src={Channel} alt="Channel" /></Link>
          </div>
        </div>
      </div>
      <div className="sidebar_children">
        {/* <div className='sectionOne'> */}
          <Outlet />
        {/* </div> */}
      </div>
    </main>
  );
};

export default ChatSIdeBar;
