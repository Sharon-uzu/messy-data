import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import logo from '../Images/messy data.png';
import Hero from '../Components/Hero';
import Browse from '../Components/Browse';
import Different from '../Components/Different';
import CoursesOverview from '../Components/CoursesOverview';
import How from '../Components/How';
import Footer from '../Components/Footer';
import Video from '../Components/Video';
import Faq from '../Components/Faq';

const Home = () => {
    const [category, setCategory] = useState(false);
    const [click, setClick] = useState(false);
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const storedDetails = localStorage.getItem("user");
        if (storedDetails) {
            setUser(JSON.parse(storedDetails));
            setLoggedIn(true);
        }
    }, []);

    const handleClick = () => {
        setClick(!click);
        document.body.style.overflow = click ? 'auto' : 'hidden';
    };
    const closeClick = () => {
        setClick(!click);
        document.body.style.overflow =  'auto' 
    };

    const openCategories = () => {
        setCategory(!category);
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        setLoggedIn(false);
        setUser(null);
        navigate('/');
    };

    return (
        <div>
            <header>
                <nav>
                    <Link to='/' onClick={closeClick}><img src={logo} alt="Logo" /></Link>

                    <div className='bars' onClick={handleClick}>
                        {click ? (<RiCloseFill id='close' />) : (<FaBars id='bar' />)}
                    </div>

                    <ul className={click ? 'active' : 'ul'}>

                        <Link to="/about" onClick={closeClick}>About Us</Link>
                   
                        <form className='s-form'>
                            <input type="search" placeholder='Search' />
                        </form>
                        <Link to="/dataset" onClick={closeClick}><button>Download DataSet</button></Link>

                        {loggedIn ? (
                            <>
                                <Link to='/dashboard'><li className='dp'>
                                    {user?.fullname?.charAt(0) || "User"}
                                </li></Link>
                                <button onClick={handleLogout}>Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" onClick={closeClick}><button>Login</button></Link>
                                <Link to="/signup" onClick={closeClick}><button className='btn'>Sign up</button></Link>
                            </>
                        )}
                    </ul>
                </nav>
            </header>
            <Hero />
            <How />
            <Browse />
            <Different />
            <CoursesOverview />
            <Video />
            <Faq/>
            <Footer />
        </div>
    );
};

export default Home;
