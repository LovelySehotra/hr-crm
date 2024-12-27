import React, { useState } from 'react'
import "./Input.css"
const Input = ({ label, labelText, id, type, value, onChange, placeholder, required ,customCss}) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };
    return (
        <div className='inputBox'>
            {label && <label htmlFor={id} className='labelClass'  >{labelText}</label>}
            <input

                type={type === 'password' && showPassword ? 'text' : type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`input ${customCss}`}
                required={required}


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