import React from "react";
import "./SelectOption.css";

const SelectOption = ({ options, value, onChange, label }) => {
  return (
    <div className="selectContainer">
      <select className="selectDropdown" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOption;
