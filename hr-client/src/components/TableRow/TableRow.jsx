import React from "react";
import DownloadImg from "../../assets/Download.svg";
import DeleteIcon from "../../assets/Delete.svg";
import Profile from "../../assets/TopBar/Profile.png";
import "./TableRow.css";

const TableRow = ({ type, row, handleStatus, handleDeleteUser }) => {
    const {
        _id: userId,
        fullName,
        email,
        phoneNumber,
        designation,
        department,
        jobApplication: { experience, status, resumeLink } = {},
        joiningDate,
        workingStatus,
        todayTask,
    } = row;

    const colorScheme = {
        scheduled: "orange",
        selected: "blue",
        ongoing: "green",
        pending: "gray",
        rejected: "red",
        new: "black",
    };

    const statusColor = colorScheme[status?.toLowerCase()] || "black";

    const options =
        type === "candidatePage"
            ? ["Selected", "Rejected", "Ongoing", "New", "Scheduled"]
            : ["Absent", "Present", "Working from home", "Medical Leave"];
    return (
        <tr style={{ color: statusColor }}>
            <td
                className={`tableColorBox ${status?.toLowerCase() === "scheduled" ? "circle" : ""}`}
            >
                <p style={{ backgroundColor: statusColor }}></p>
            </td>

            {type === "employeePage" && (
                <td>
                    <img src={Profile} alt="Profile" />
                </td>
            )}

            <td>{fullName}</td>
            <td>{email}</td>
            {type !== "attendancePage" && <td>{phoneNumber}</td>}
            <td>{designation}</td>
            {type !== "candidatePage" && <td>{department}</td>}

            {type === "attendancePage" ? (
                <td>{todayTask}</td>
            ) : type === "candidatePage" ? (
                <td>{experience}</td>
            ) : null}

            {type !== "employeePage" && (
                <td>
                    <select
                        style={{ color: statusColor }}
                        value={
                            type === "candidatePage"
                                ? status?.toLowerCase()
                                : workingStatus?.toLowerCase()
                        }
                        onChange={(e) => handleStatus(userId, e.target.value)}
                    >
                        {options.map((option, index) => (
                            <option
                                key={index}
                                value={option.replace(/\s+/g, "").toLowerCase()}
                            >
                                {option}
                            </option>
                        ))}
                    </select>
                </td>
            )}

            {
                type === "candidatePage" && (

                    <td className="resume">
                        <a href={resumeLink} download target="_blank" rel="noopener noreferrer">
                            <img src={DownloadImg} alt="Download" />
                        </a>
                    </td>)
            }

            {type === "candidatePage" && (
                <td>
                    <button className="deleteButton" onClick={() => handleDeleteUser(userId)}>
                        <img src={DeleteIcon} alt="Delete" />
                    </button>
                </td>)

            }

            {type === "employeePage" && <td>{joiningDate ? new Date(joiningDate).toLocaleDateString() : "N/A"}</td>}
        </tr>
    );
};

export default TableRow;
