import React from "react";
import DownloadImg from "../../assets/Download.svg"
import "./TableRow.css";

const TableRow = ({ type, row, onStatusChange }) => {
    const colorScheme = {
        scheduled: "orange",
        selected: "blue",
        ongoing: "green",
        pending: "gray",
        rejected: "red",
    };

    return (
        <tr style={{ color: colorScheme[row.jobApplication.status.toLowerCase()] || "white" }}>
            <td className={`tableColorBox  ${row.jobApplication.status.toLowerCase() == 'scheduled' ? "circle" : ""}`}><p style={{ backgroundColor: colorScheme[row.jobApplication.status.toLowerCase()] || "white" }}></p></td>
            <td>{row.fullName}</td>
            <td>{row.email}</td>
            <td>{row.phoneNumber}</td>
            <td>{row.Position}</td>
            <td>
                <select  style={{ color: colorScheme[row.jobApplication.status.toLowerCase()] || "white" }}
                    value={row.jobApplication.status}
                    onChange={(e) => onStatusChange(row.id, e.target.value)}
                >
                    <option value="Selected">Selected</option>
                    <option value="Pending">Pending</option>
                    <option value="Rejected">Rejected</option>
                </select>
            </td>
            <td>{row.Experience}</td>
            {
                type === "candidatePage" ?
                <td className="resume">
                <a href={row.Resume} target="_blank"  rel="noopener noreferrer">
                    <img src={DownloadImg} alt="" />
                </a>
                <a href={row.Resume} target="_blank"  rel="noopener noreferrer">
                    <img src={DownloadImg} alt="" />
                </a>
            </td> : ''
            }
        </tr>
    );
};

export default TableRow;
