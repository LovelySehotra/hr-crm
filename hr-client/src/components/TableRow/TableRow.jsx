import React, { useState } from "react";
import DownloadImg from "../../assets/Download.svg"
import DeleteIcon from "../../assets/Delete.svg"
import Profile from "../../assets/TopBar/Profile.png"
import "./TableRow.css";

const TableRow = ({ type, row, handleStatus,handleDeleteUser }) => {
    const { _id: userId, fullName, email, phoneNumber,designation, department, jobApplication: { experience, status, resumeLink }, joiningDate, workingStatus, todayTask, position } = row;
    const colorScheme = {
        scheduled: "orange",
        selected: "blue",
        ongoing: "green",
        pending: "gray",
        rejected: "red",
        new: "black"
    };
    // console.log(fullName, email, phoneNumber, department, status, experience)
    return (
        <tr style={{ color: colorScheme[status.toLowerCase()] || "black" }}>
            <td className={`tableColorBox  ${status.toLowerCase() == 'scheduled' ? "circle" : ""}`}><p style={{ backgroundColor: colorScheme[status.toLowerCase()] || "white" }}></p></td>
            {type === "employeePage" && <td><img src={Profile} alt="" /></td>}
            <td>{fullName}</td>
            <td>{email}</td>
            <td>{phoneNumber}</td>
            <td>{department}</td>
            {
                type !== "employeePage" && (
                    <td>
                        <select
                            style={{ color: colorScheme[status?.toLowerCase()] || "yellow" }}
                            value={status.toLowerCase()} // Ensure correct default value
                            onChange={(e) => handleStatus(userId, e.target.value)}
                        >
                            <option value="selected">Selected</option>
                            <option value="pending">Pending</option>
                            <option value="rejected">Rejected</option>
                            <option value="new">New</option>
                            <option value="ongoing">Ongoing</option>
                        </select>
                    </td>
                )
            }
            {
                type === "attendancePage" ? <td>{todayTask}</td> : type === "candidatePage" ? <td>{experience}</td> : <td>{designation}</td>
            }

            {
                type === "candidatePage" &&
                <td className="resume">
                    <a href={resumeLink} download target="_blank" rel="noopener noreferrer">
                        <img src={DownloadImg} alt="" />
                    </a>
                    <a href={row.Resume} onClick={() => handleDeleteUser(userId)} target="_blank" rel="noopener noreferrer">
                        <img src={DeleteIcon} alt="" />
                    </a>
                </td>
            }
            {
                type === 'employeePage' && <td>{joiningDate}</td>
            }
        </tr>
    );
};

export default TableRow;
