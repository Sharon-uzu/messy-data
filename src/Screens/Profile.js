import React from 'react'
import Sidebar from '../Components/Sidebar'

const Profile = ({ setLoggedIn, setUser }) => {
  return (
    <div>
        <div className="dash">
            <Sidebar setLoggedIn={setLoggedIn} setUser={setUser}/>

            <div className="prof">
                <div className="profile">
                    <div className="profile-c">
                        <h2>Profile</h2>


                        <h4>Full Name</h4>
                        <p>Adams Smith</p>

                        <h4>Email</h4>
                        <p>smith@gmail.com</p>

                        <h4>Phone Number</h4>
                        <p>08162537485</p>

                        <h4>Country</h4>
                        <p>Australia</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Profile