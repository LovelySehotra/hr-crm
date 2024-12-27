import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../../assets/Logo.svg"
import Candidate from "../../assets/SideBar/Candidates.svg"
import Attendance from "../../assets/SideBar/Attendance.svg"
import Lagout from "../../assets/SideBar/Lagout.svg"
import Leaves from "../../assets/SideBar/Leaves.svg"
import Employees from "../../assets/SideBar/Employees.svg"
import './SideBar.css';
import Typography from '../Typography/Typography';

const Sidebar = () => {
  const location = useLocation(); // Get current path
  const [activePath, setActivePath] = useState(location.pathname);
  const handleClick = (path) => {
    setActivePath(path); 
    console.log(activePath)
  };
  // console.log(activePath)
  return (
    <div className="sidebar">


      <div className="sidebarLogo">
        <img src={Logo} alt="logo" />
      </div>
      <nav>
        <ul className='sidebarMenu'>
          <li >
            <Typography type="caption">Requirement</Typography>
            <ul className='sidebarList'>
              <li 
              className={activePath === "/candidate" ? "active" : ""}
              onClick={()=>handleClick("/candidate")}
              >
              <img src={Candidate} alt="candidates" />
              <Link to="/candidate">Candidates</Link>
              </li>
            </ul>
          </li>
          <li>
            <Typography type="caption">Organization</Typography>
            <ul className='sidebarList'>
              <li 
              className={activePath === "/employee" ? "active" : ""}
              onClick={()=>handleClick("/employee")}
              >
                <img src={Employees} alt="employees" />
                <Link to="/employee">Employees</Link>
              </li>
              <li
               className={activePath === "/attendance" ? "active" : ""}
               onClick={()=>handleClick("/attendance")}
               >
                <img src={Attendance} alt="attendance" />
                <Link to="/attendance">Attendance</Link>
              </li>
              <li 
              className={activePath === "/leaves" ? "active" : ""}
              onClick={()=>handleClick("/leaves")}
              >
                <img src={Leaves} alt="leaves" />
                <Link to="/leaves">Leaves</Link>
              </li>
            </ul>
          </li>
          <li 
          
          >
            <Typography type="caption">Others</Typography>
            <ul className='sidebarList'>
              <li className={activePath === "/lagout" ? "active" : ""}
                onClick={()=>handleClick("/lagout")}
              >
                <img src={Lagout} alt="lagout" />
                <Link to="/lagout">Logout</Link>
              </li>
            </ul>
          </li>
        </ul>


      </nav>
    </div>
  );
};

export default Sidebar;
