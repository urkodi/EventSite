import React from 'react'
import './LoginPage.css'

const LoginPage = () => {
    return (
        <div className='LoginPage'>
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
        </div>
    )
}

    export default LoginPage