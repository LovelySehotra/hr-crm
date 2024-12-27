import React from 'react'
import "./Input.css"
const Input = ({ label, labelText, id, type, value, onChange, placeholder, required }) => {
    return (
        <>
            {label && <label htmlFor={id} className='labelClass'  >{labelText}</label>}
            <input

                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="input"
                required={required}


            />
        </>
    )
}
export default Input;