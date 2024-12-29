import React from 'react';
import './Checkbox.css';
import Typography from '../Typography/Typography';

const Checkbox = ({ id, labelText, checked, onChange }) => {
  return (
    <div className="checkboxContainer">
      <input
        id={id}
        type="checkbox"
        className="checkboxInput"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className="checkboxLabel">
       <Typography type="caption"> {labelText}</Typography>
      </label>
    </div>
  );
};

export default Checkbox;
