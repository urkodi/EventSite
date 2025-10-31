import React from 'react'
import './CreateAccountPage.css'
import GoogleLogo from '../assets/images/GoogleLogo.png'
import FacebookLogo from '../assets/images/FacebookLogo.png'
import AppleLogo from '../assets/images/AppleLogo.png'

import eventlogo from '../assets/images/eventlogo.png'

const CreateAccountPage = () => {
    return (

        <div className='CreateAccountPage'>
            <header className="App-header">
                <img src={eventlogo} alt="Event Logo" />
            </header>
         <div className="header">
            <div className="Text">Create Account</div>
         </div>

         <div className="inputs">
            <div className="name-row">
               <input type="text" id="FirstName" placeholder="First name" />
               <input type="text" id="LastName" placeholder="Last name" />
            </div>
            <div className="input">
               <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="input">
               <input type="password" id="password" placeholder="Enter your password" />
            </div>   
            <div className="input">
               <input type="password" id="ConfirmPassword" placeholder="Confirm your password" />
            </div>   
         </div>

        <div className="terms">
           <input type="checkbox" id="terms" />
           <label htmlFor="terms">
                I agree to the terms & conditions</label>
        </div>

         <div className="submit-container">
            <button type="submit">Sign Up</button>
         </div>

        <div className="divider">
            <span>Or continue with</span>
        </div>

        <div className="socials">
            <button className="social-button google">
                <img src={GoogleLogo} alt="Google" />
            </button>
            <button className="social-button apple">
                <img src={AppleLogo} alt="Apple" />
            </button>
            <button className="social-button facebook">
                <img src={FacebookLogo} alt="Facebook" />
            </button>
        </div>

        <div className="login-link">
            Already have an account? <a href="/login">Log In</a>
        </div>
        </div>
    )
}

    export default CreateAccountPage 