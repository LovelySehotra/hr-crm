import React from 'react'
import Profile from "../../assets/TopBar/Profile.png";
import Mail from "../../assets/TopBar/Mail.svg";
import Notification from "../../assets/TopBar/Notification.svg"
import { Link } from 'react-router-dom';
import "./DashboardTopBar.css"
const DashboardTopBar = ({label}) => {
  return (
    <div className='topBar'>
      <div className='topBarLabel'>
        <h3>{label}</h3>
      </div>
      <div className='topBarButton'>
        <Link to="/message"><img src={Mail} alt="mail" /></Link>
        <Link to="/notification"><img src={Notification} alt="notification" /></Link>
        <Link to="/profile"> <img src={Profile} alt='profile'/> </Link>
      </div>
    </div>
  )
}

export default DashboardTopBar
