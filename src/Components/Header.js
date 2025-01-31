import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import logo from '../Images/messy data.png';

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [click, setClick] = useState(false);
    const [category, setCategory] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [userInitial, setUserInitial] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.name) {
            setLoggedIn(true);
            setUserInitial(storedUser.name.charAt(0).toUpperCase()); // Ensure the first letter is uppercase
        } else {
            setLoggedIn(false);  // If no user data, consider user as not logged in
        }
    }, []);

    const handleClick = () => {
        setClick(!click);
        setDropdownOpen(!isDropdownOpen);
        document.body.style.overflow = click ? 'auto' : 'hidden'; 
    }

    const closeClick = () => {
        setClick(!click);
        setDropdownOpen(!isDropdownOpen);
        document.body.style.overflow =  'auto' 
    }

    const openCategories = () => {
        setCategory(!category);
    }

    const handleInitialClick = () => {
        navigate('/dashboard'); 
    }

    return (
        <div>
            <header>
                <nav>
                    <Link to='/'><img src={logo} alt="Logo" /></Link>

                    <div className='bars' onClick={handleClick}>
                        {click ? (<RiCloseFill id='close' />) : (<FaBars id='bar' />)}
                    </div>

                    <ul className={click ? 'active' : 'ul'}>
                        <Link to="/about" onClick={closeClick}>About Us</Link>
                        
                        <form className='s-form'>
                            <input type="search" placeholder='Search' />
                        </form>
                        <Link to="/dataset" onClick={closeClick}><button>Download DataSet</button></Link>

                        {!loggedIn ? (
                            <>
                                <Link to="/login" onClick={closeClick}><button>Login</button></Link>
                                <Link to="/signup" onClick={closeClick}><button className='btn'>Sign up</button></Link>
                            </>
                        ) : (
                            <div className="user-initial" onClick={handleInitialClick}>
                                {userInitial}
                            </div>
                        )}
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
