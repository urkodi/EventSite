import React from 'react'
import './LoginPage.css'

import eventlogo from '../assets/images/eventlogo.png'

const LoginPage = () => {
    return (
        <div className='LoginPage'>
         <header className="App-header">
                <img src={eventlogo} alt="Event Logo" />
            </header>
         <div className="header">
            <div className="Text">Login</div>
         </div>
         <div className="inputs">
            <div className="input">
               <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="input">
               <input type="password" id="password" placeholder="Enter your password" />
            </div>   
         </div>
         <div className="forgot-password"> Forgot Password? <span>Click Here!</span></div>
         <div className="submit-container">
            <button type="submit">Login</button>
         </div>

         <div className="signup-link">
            Don't have an account? <a href="/create-account">Sign Up</a>
        </div>

        </div>
    )
}

    export default LoginPage