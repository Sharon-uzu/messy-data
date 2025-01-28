import React,{useState} from 'react'
import {AiFillHome } from "react-icons/ai";
import {FaWallet } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import { FaToolbox } from "react-icons/fa";
import {BsCurrencyBitcoin } from "react-icons/bs";
import {CgMenuGridO } from "react-icons/cg";
// import {FaCubes } from "react-icons/fa";
import {FaUsers } from "react-icons/fa";
import {IoIosFootball } from "react-icons/io";
import {BiSolidDownArrow} from "react-icons/bi";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import logo from '../Images/messy data2.png'

const Sidebar = ({ setLoggedIn, setUser }) => {

    const navigate = useNavigate();


    const handleLogout = () => {
        localStorage.removeItem("user");
        setLoggedIn(false);
        setUser(null);
        navigate('/');
    };
  
  return (
    <div>

        <div className="sidebar">
            <div className="side">
                <div className="side-c">

                    <div className="top">
                        <div className="logo">
                            <Link to='/'><img src={logo} alt="" /></Link>
                        </div>
                        
                        
                        <NavLink to='/dashboard' className='link name' activeclassName = 'active'>
                            <div className='each'>
            
                                <h4>DataSet</h4>
                            </div> 
                        </NavLink>

                        <NavLink to='/profile' className='link name' activeclassName = 'active'>
                            <div className='each'>
            
                                <h4>Profile</h4>
                            </div> 
                        </NavLink>

                        
                    </div>

                    <div className="bottom">
                        <div className='link name' activeclassName = 'active' onClick={handleLogout}>
                            <div className='each'>
                                <h4>LogOut</h4>
                            </div> 
                        </div>
                    </div>
                     
                </div>
            </div>

        </div>

    </div>
  )
}

export default Sidebar