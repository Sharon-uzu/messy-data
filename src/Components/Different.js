import React from 'react'
import { FaLaptop } from "react-icons/fa";
import { IoHeadset } from "react-icons/io5";
import { FaFileInvoice } from "react-icons/fa";


const Different = () => {
  return (
    <div>
        <div className="different">
            <div className="diff">
                <div className="one">
                    <h1>What <span>Makes Us Different</span> From Others</h1>
                </div>

                <div className="two">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur consequuntur nulla eius ex amet, velit vitae ad quo cupiditate rerum doloremque nihil molestias? Magni sed ea officia, temporibus quas illum.</p>
                </div>

                <div className="three">
                    <div>
                        <FaLaptop className='t-i'/>
                        <h6>Graphics Templates</h6>
                    </div>
                    <div>
                        <IoHeadset className='t-i'/>
                        <h6>Audio Book</h6>
                    </div>
                    <div>
                        <FaFileInvoice className='t-i'/>
                        <h6>E-Book</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Different