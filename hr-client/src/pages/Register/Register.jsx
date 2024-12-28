import React from 'react'
import RegisterForm from '../../features/RegisterForm/RegisterForm'
import Carousel from '../../features/Carousel/Carousel'
import Logo from "../../assets/Logo.svg"
import "./Register.css"

const Register = () => {
    return (
        <div className='registerPage'>
            <div className='registerPageBorder'>
                <div className='registerPageLogo'>
                    <img src={Logo} alt="" />
                    <RegisterForm />
                </div>
                <div className='registerPageSectionTwo'>
                    <Carousel />
                </div>
            </div>
        </div>
    )
}

export default Register
