import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import { Supabase } from "../config/supabase-config";

const Login = ({ setLoggedIn, setUser }) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflow = 'auto';
    }, [pathname]);

    const initialValues = {
        email: "",
        password: "",
    };

    const [formData, setFormData] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email";
        }

        if (!values.password) {
            errors.password = "Password is required";
        }

        return errors;
    };


    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const errors = validate(formData);
        setFormErrors(errors);
    
        if (Object.keys(errors).length > 0) {
            return; // Stop submission if there are validation errors
        }
    
        try {
            const { data, error } = await Supabase
                .from("messy-data")
                .select("*")
                .eq("email", formData.email)
                .eq("password", formData.password)  // Note: Ensure you're hashing passwords in real applications
                .single();
    
            if (error) {
                console.error("Supabase error:", error.message);
                alert("An error occurred during login. Please try again.");
                return;
            }
    
            if (!data) {
                alert("Incorrect email or password. Please try again.");
                return;
            }
    
            // Save user details to local storage
            const user = {
                id: data.id,
                fullname: data.fullname,  // Assuming 'fullname' is part of your 'messy-data' table
                role: data.role,          // Assuming 'role' is stored in the table
            };
    
            setUser(user);
            localStorage.setItem("userId", data.id);
            localStorage.setItem("user", JSON.stringify(user));
            setLoggedIn(true);
    
            // Navigate based on role
            if (user.role === "admin") {
                navigate("/admin");
            } else {
                navigate("/dashboard");
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("Error during login");
        }
    };
    

    return (
        <div>
            <div className="registration">
                <div className="reg-l"></div>

                <div className="reg-r">
                    <div className="reg-c">
                        <Link to='/'><IoArrowBack style={{ cursor: 'pointer' }} /></Link>
                        <h3>Welcome Back!</h3>
                        <form className='r-form'>
                            <div className="form-c">
                                <h6>Email Address</h6>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder='Enter your email address'
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                                {formErrors.email && <p className='error-text' style={{ color: "red", fontSize: "14px", margin: 0 }}>{formErrors.email}</p>}

                                <h6>Password</h6>
                                <input
                                    type="password"
                                    placeholder='Enter your password'
                                    name='password'
                                    className='pass'
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                                {formErrors.password && <p className='error-text' style={{ color: "red", fontSize: "14px", margin: 0 }}>{formErrors.password}</p>}

                                {/* Optional forgot password link */}
                                {/* <Link to='/reset' className='f-l'><p className='fgt'>Forgot password?</p></Link> */}

                                <button onClick={handleSubmit}>Login</button>
                                <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
