import React from 'react';
import '../style/Aboutus.css';

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-content">
                <div className="about-left">

                    <img src="/images/AboutUs.jpg" alt="About Us Photo" />
                </div>
                <div className="about-right">
                    <h2>About Us</h2>
                    <p>At BikeFix, we're fueled by a passion for bikes and
                        <br />a commitment to keeping every ride safe, smooth, and enjoyable.</p>
                </div>
            </div>
        </div>
        );
}

export default AboutUs;