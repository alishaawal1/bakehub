 // LandingPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../style/LandingPage.css'; // Import the CSS file

const LandingPage = () => {
    return (
        <div className="landing-container">
            <div className="top-content">
                <div className="top-right-content">
                    
                    <img src="/images/LandingPage.jpg" alt="Landing Page Photo" />
                </div>
                <div className="top-left-content">
                    <h4>“Where Every Pedal Counts”</h4>
                    <h1>Keeping Your Wheels in Motion, Always.</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        <br />Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <div className="buttons">
                        <Link to="/login" className="login-button">Login</Link>
                        <Link to="/register" className="register-button">Register</Link>
                    </div>
                </div>

            </div>
            <div className='bottom-content'>
                <div className="about-us">
                    <div className="about-content">
                        <div className="about-left">
                           
                            <img src="/images/AboutUs.jpg" alt="About Us Photo" />
                        </div>
                        <div className="about-right">
                            <h2>About Us</h2>
                            <p>At BikeFix, we're fueled by a passion for bikes and 
                                <br/>a commitment to keeping every ride safe, smooth, and enjoyable.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default LandingPage;




