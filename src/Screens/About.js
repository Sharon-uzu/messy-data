import React from 'react'
import Header from '../Components/Header'
import img from '../Images/how it works.jpg'
import { FaHandsHoldingChild } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import img1 from '../Images/dp1.jpeg'
import img2 from '../Images/dp2.jpeg'
import Footer from '../Components/Footer';

const About = () => {
  return (
    <div>
        <Header/>
        <div className="aboutus">
            <div className="about-c">
                <div className="ab-l">
                    <h2>About Us</h2>
                    <h4>Discover & Access Data Information</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor voluptate sapiente porro nulla aut quia ratione et sequi corrupti! Suscipit veritatis qui doloremque pariatur dolores ex enim a veniam! Soluta.</p>

                    <div className="ab-flex">
                    <div className="div div1">
                        <h5>Creators</h5>
                        <h3>25K</h3>
                    </div>

                    <div className="div div1">
                        <h5>Data Sets</h5>
                        <h3>125K</h3>
                    </div>

                    <div className="div">
                        <h5>Users</h5>
                        <h3>34K</h3>
                    </div>
                </div>
                </div>
                <img src={img} alt="" />

                
            </div>

            <div className="ultimate">
                <h2>Ultimate Goals</h2>

                <div className="ult-cards">
                    <div className="ult-card">
                        <div className="uc-c">
                            <FaHandsHoldingChild className="u-i"/>
                            <h3>Title 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim aliquid praesentium exercitationem provident, veritatis facilis.</p>
                        </div>
                        
                    </div>

                    <div className="ult-card">
                        <div className="uc-c">
                            <FaHandsHoldingChild className="u-i"/>
                            <h3>Title 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim aliquid praesentium exercitationem provident, veritatis facilis.</p>
                        </div>
                        
                    </div>

                    <div className="ult-card">
                        <div className="uc-c">
                            <FaHandsHoldingChild className="u-i"/>
                            <h3>Title 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim aliquid praesentium exercitationem provident, veritatis facilis.</p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="our-team">
                <h2>Meet Our Team</h2>
                <div className="team1">
                    <div className="team-c">
                        <div className="pix">
                            <img src={img1} alt="" />
                        </div>
                        <h3>Mr Fred A.</h3>
                        <h4>Designer</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime asperiores.</p>

                        <div className="sos">
                            <FaFacebookF className='s-i'/>
                            <FaInstagram className='s-i'/>
                            <BiLogoLinkedin className='s-i'/>
                        </div>
                    </div>
                    
                </div>

                <div className="team1">
                    <div className="team-c">
                        <div className="pix">
                            <img src={img2} alt="" />
                        </div>
                        <h3>Mr Fred A.</h3>
                        <h4>Designer</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime asperiores.</p>

                        <div className="sos">
                            <FaFacebookF className='s-i'/>
                            <FaInstagram className='s-i'/>
                            <BiLogoLinkedin className='s-i'/>
                        </div>
                    </div>
                    
                </div>

                <div className="team1">
                    <div className="team-c">
                        <div className="pix">
                            <img src={img1} alt="" />
                        </div>
                        <h3>Mr Fred A.</h3>
                        <h4>Designer</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime asperiores.</p>

                        <div className="sos">
                            <FaFacebookF className='s-i'/>
                            <FaInstagram className='s-i'/>
                            <BiLogoLinkedin className='s-i'/>
                        </div>
                    </div>
                    
                </div>

                <div className="team1">
                    <div className="team-c">
                        <div className="pix">
                            <img src={img2} alt="" />
                        </div>
                        <h3>Mr Fred A.</h3>
                        <h4>Designer</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime asperiores.</p>

                        <div className="sos">
                            <FaFacebookF className='s-i'/>
                            <FaInstagram className='s-i'/>
                            <BiLogoLinkedin className='s-i'/>
                        </div>
                    </div>
                    
                </div>

                <div className="team1">
                    <div className="team-c">
                        <div className="pix">
                            <img src={img1} alt="" />
                        </div>
                        <h3>Mr Fred A.</h3>
                        <h4>Designer</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime asperiores.</p>

                        <div className="sos">
                            <FaFacebookF className='s-i'/>
                            <FaInstagram className='s-i'/>
                            <BiLogoLinkedin className='s-i'/>
                        </div>
                    </div>
                    
                </div>

                <div className="team1">
                    <div className="team-c">
                        <div className="pix">
                            <img src={img2} alt="" />
                        </div>
                        <h3>Mr Fred A.</h3>
                        <h4>Designer</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime asperiores.</p>

                        <div className="sos">
                            <FaFacebookF className='s-i'/>
                            <FaInstagram className='s-i'/>
                            <BiLogoLinkedin className='s-i'/>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>

        <Footer/>
    </div>
  )
}

export default About