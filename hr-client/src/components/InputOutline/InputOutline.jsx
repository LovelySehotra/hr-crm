import React, { useState } from 'react';
import './InputOutline.css';

const InputOutline = ({
  label,
  labelText,
  id,
  type,
  value,
  onChange,
  required,
  customCss,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => {
      if (!value) setIsFocused(false);
    };
  
    return (
      <div className="inputContainer">
        {label && (
          <label
            htmlFor={id}
            className={`inputLabel ${isFocused || value ? 'active' : ''}`}
          >
            {labelText}
          </label>
        )}
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          className={`inputField ${ type==='file' ? "fileInput" : "" } ${customCss}`}
          required={required}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    );
  };
export default InputOutline;
