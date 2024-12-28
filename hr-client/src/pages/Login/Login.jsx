import React from 'react'
import LoginForm from '../../features/LoginForm/LoginForm'
import Logo from "../../assets/Logo.svg"

const Login = () => {
    return (
        <div>
            <div>
                <div>
                <img src={Logo} alt="" />
                </div>
                <LoginForm />
            </div>
            <div>

            </div>
        </div>
    )
}

export default Login
