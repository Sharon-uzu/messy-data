import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className="dk"></div>
      <div className="hero-s">
        <div className="hero">
          <h1>Discover & Access Data Information</h1>
          <p>Digital marketplace for buy and sellfrom the world's top artist.</p>
          <Link><button>Get Started</button></Link>

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