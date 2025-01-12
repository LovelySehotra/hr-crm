import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from "../../assets/Logo.svg";
import Candidate from "../../assets/SideBar/Candidate.svg";
import Attendance from "../../assets/SideBar/Attendance.svg";
import Lagout from "../../assets/SideBar/Lagout.svg";
import Leaves from "../../assets/SideBar/Leaves.svg";
import Employees from "../../assets/SideBar/Employees.svg";
import './SideBar.css';
import Typography from '../Typography/Typography';
import { SearchBar } from "../../components";

const Sidebar = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePath, setActivePath] = useState(location.pathname);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State for sidebar toggle

  const handleClick = (path) => {
    setActivePath(path);
  };

  const handleSearch = (value) => {
    setActivePath(`/${value.toLowerCase()}`);
    navigate(activePath);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar state
  };

  return (
    <div className="sidebarLayout">
      {/* Sidebar Section */}
      <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}>
        <div>
          <div className="sidebarTop">
          <Link to="/candidate">
            <img src={Logo} alt="logo" />
          </Link>
          <button className="toggleButton" onClick={toggleSidebar}>
          {isSidebarOpen ?"✕": "≡"} 
        </button>
          </div>
          <div className="sideBarSearch">
            <SearchBar placeholder="Search.." onSearch={handleSearch} />
          </div>
        </div>
       
        <nav>
          <ul className="sidebarMenu">
            <li>
              <p className="subheading">
                <Typography type="caption">Requirement</Typography>
              </p>
              <ul className="sidebarList">
                <li
                  className={` ${activePath === "/candidate" ? "active" : ""}`}
                  onClick={() => handleClick("/candidate")}
                >
                  <img src={Candidate} alt="candidates" />
                  <Link to="/candidate">Candidates</Link>
                </li>
              </ul>
            </li>
            <li>
              <p className="subheading">
                <Typography type="caption">Organization</Typography>
              </p>
              <ul className="sidebarList">
                <li
                  className={activePath === "/employee" ? "active" : ""}
                  onClick={() => handleClick("/employee")}
                >
                  <img src={Employees} alt="employees" />
                  <Link to="/employee">Employees</Link>
                </li>
                <li
                  className={activePath === "/attendance" ? "active" : ""}
                  onClick={() => handleClick("/attendance")}
                >
                  <img src={Attendance} alt="attendance" />
                  <Link to="/attendance">Attendance</Link>
                </li>
                <li
                  className={activePath === "/leaves" ? "active" : ""}
                  onClick={() => handleClick("/leaves")}
                >
                  <img src={Leaves} alt="leaves" />
                  <Link to="/leaves">Leaves</Link>
                </li>
              </ul>
            </li>
            <li>
              <p className="subheading">
                <Typography type="caption">Others</Typography>
              </p>
              <ul className="sidebarList">
                <li
                  className={activePath === "/lagout" ? "active" : ""}
                  onClick={() => handleClick("/lagout")}
                >
                  <img src={Lagout} alt="lagout" />
                  <Link to="/logout">Logout</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className={`mainContent ${isSidebarOpen ? '' : 'fullWidth'}`}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
