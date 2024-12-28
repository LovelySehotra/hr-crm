import React from 'react'

import Logo from "../../assets/Logo.svg"
import "./Login.css"
import { Carousel, LoginForm } from '../../features'

const Login = () => {
    return (
        <div className='loginPage'>
            <div className='loginPageBorder'>
                <div className='loginPageLogo'>
                    <img src={Logo} alt="" />
                <LoginForm/>
                </div>
                <div className='loginPageSectionTwo'>
                    <Carousel/>
                </div>
            </div>
        </div>
    )
}

export default Login
