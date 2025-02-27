import React, { useState } from 'react'
import "./Input.css"
// import '../../../src/index.css'; 
const Input = ({ label, labelText, id, type, value, onChange, placeholder, required, customCss, readOnly = false, backgroundColor, color }) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };
    return (
        <div className='inputBox'>
            {label && <label htmlFor={id} className='labelClass'  >{labelText}</label>}
            <input
                style={{ backgroundColor: backgroundColor && backgroundColor, color: color && color }}
                id={id}
                type={type === 'password' && showPassword ? 'text' : type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`input ${customCss}`}
                required={required}
                readOnly={readOnly}

            />
            {type === 'password' && (
                <span
                    className='passwordIconClass'
                    onClick={togglePasswordVisibility}
                >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                </span>
            )}
        </div>
    )
}
export default Input;