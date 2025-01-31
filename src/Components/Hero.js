import React from 'react'
import { Link } from 'react-router-dom'
import  Typewriter  from 'typewriter-effect';


const Hero = () => {
  return (
    <div className='hero-section'>
      <div className="dk"></div>
      <div className="hero-s">
        <div className="hero">
          <h1><Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      strings:[
                        "Your Ultimate Hub for Data Cleaning, Analysis & Mastery.",
                        "Elevate Your Analytics Game with Our Practice Datasets.",
                        "Refine Your Data Skills with Challenging, Real-World Datasets.", 
                      ],
                  }}
                  /></h1>
          <p>Digital marketplace for buy and sellfrom the world's top artist.</p>
          <Link to='/dataset'><button>Get Started</button></Link>

          <div className="numbers">
            <div>
              <h2>25K</h2>
              <p>Creators</p>
            </div>
            <div>
              <h2>125K</h2>
              <p>Data Sets</p>
            </div>
            <div>
              <h2>34K</h2>
              <p>Users</p>
            </div>

          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Hero