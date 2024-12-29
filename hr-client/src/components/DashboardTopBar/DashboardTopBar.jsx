import React from 'react'
import Profile from "../../assets/TopBar/Profile.png";
import Mail from "../../assets/TopBar/Mail.svg";
import Notification from "../../assets/TopBar/Notification.svg"
import { Link } from 'react-router-dom';
import "./DashboardTopBar.css"
const DashboardTopBar = () => {
  return (
    <div className='topBar'>
      <div className='topBarLabel'>
        <h3>Dashboard</h3>
      </div>
      <div className='topBarButton'>
        <Link><img src={Mail} alt="mail" /></Link>
        <Link><img src={Notification} alt="notification" /></Link>
        <Link> <img src={Profile} alt='profile'/> </Link>
      </div>
    </div>
  )
}

export default DashboardTopBar
