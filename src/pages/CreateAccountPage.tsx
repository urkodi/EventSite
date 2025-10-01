import React from 'react'
import './CreateAccountPage.css'

const CreateAccountPage = () => {
    return (
        <div className='CreateAccountPage'>
         <div className="header">
            <div className="Text">Create Account</div>
         </div>
         <div className="inputs">
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
         <div className="submit-container">
            <button type="submit">Create Account</button>
         </div>
        </div>
    )
}

    export default CreateAccountPage 