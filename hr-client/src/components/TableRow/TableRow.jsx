import React from "react";
import DownloadImg from "../../assets/Download.svg"
import DeleteIcon from "../../assets/Delete.svg"
import "./TableRow.css";

const TableRow = ({ type, row, onStatusChange }) => {
    const {fullName,email,phoneNumber,department,jobApplication:{experience,status,resumeLink}} = row;
    const colorScheme = {
        scheduled: "orange",
        selected: "blue",
        ongoing: "green",
        pending: "gray",
        rejected: "red",
        new: "black"
    };
    console.log(fullName,email,phoneNumber,department,status,experience)
    return (
        <tr style={{ color: colorScheme[status.toLowerCase()] || "black" }}>
            <td className={`tableColorBox  ${status.toLowerCase() == 'scheduled' ? "circle" : ""}`}><p style={{ backgroundColor: colorScheme[status.toLowerCase()] || "white" }}></p></td>
            <td>{fullName}</td>
            <td>{email}</td>
            <td>{phoneNumber}</td>
            <td>{department}</td>
            <td>
                <select style={{ color: colorScheme[status.toLowerCase()] || "yellow" }}
                    value={status?.toLowerCase() ||"Pending"}
                    onChange={(e) => onStatusChange(row.id, e.target.value)}
                >
                    <option value="Selected">Selected</option>
                    <option value="Pending">Pending</option>
                    <option value="Rejected">Rejected</option>
                </select>
            </td>
            <td>{experience}</td>
            {
                type === "candidatePage" ?
                    <td className="resume">
                        <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                            <img src={DownloadImg} alt="" />
                        </a>
                        <a href={row.Resume} target="_blank" rel="noopener noreferrer">
                            <img src={DeleteIcon} alt="" />
                        </a>
                    </td> : ''
            }
        </tr>
    );
};

export default TableRow;
