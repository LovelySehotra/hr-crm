import React from 'react'
import "./Button.css"
const Button = ({ children, bgcolor,onSubmit }) => {
    return (
        <button onClick={onSubmit} className='button' style={{ backgroundColor: bgcolor ? bgcolor : "var(--primary-100)" }}>
            {children}
        </button>
    )
}

export default Button
