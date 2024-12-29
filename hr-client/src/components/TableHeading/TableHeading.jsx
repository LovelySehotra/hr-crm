import React from "react";
import "./TableHeading.css"
const TableHeading = ({ headings }) => {
 
  return (
      <thead>
        <tr className="headingRow">
          {headings.map((heading, index) => (
            <th key={index}>{heading}</th>
          ))}
        </tr>
      </thead>
    
  );
};

export default TableHeading;
