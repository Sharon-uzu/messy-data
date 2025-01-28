import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import { Supabase } from "../config/supabase-config";

const SignUp = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);  // Loading state
    const [emailExistsError, setEmailExistsError] = useState('');  // State to hold email existence error
    const [confirmPassword, setConfirmPassword] = useState('');  // State for confirm password

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflow = 'auto';
    }, [pathname]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data = await response.json();
                const countryNames = data.map(country => country.name.common).sort();
                setCountries(countryNames);
            } catch (error) {
                console.error('Error fetching country data:', error);
            }
        };

        fetchCountries();
    }, []);

    const initialValues = {
        fullname: "",
        email: "",
        phone: "",
        country: "",
        password: "",
    };

    const [formData, setFormData] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const checkIfEmailExists = async (email) => {
        try {
            const { data, error } = await Supabase
                .from('messy-data')  // Replace 'messy-data' with your actual table name
                .select('email')
                .eq('email', email)
                .single();

            if (error) {
                console.error('Error fetching email:', error);
            }
            
            // Return true if email exists
            return !!data;
        } catch (err) {
            console.error('Error during email check:', err);
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(validate(formData, confirmPassword));
        setIsSubmit(true);
        setIsLoading(true); // Set loading to true when submitting
        setEmailExistsError('');  // Clear previous email errors

        // First, check if the email exists
        const emailExists = await checkIfEmailExists(formData.email);

        if (emailExists) {
            // If the email exists, show an error and don't proceed with form submission
            setEmailExistsError('This email is already registered. Please use a different email.');
            setIsLoading(false); // Stop loading
            return;  // Do not submit the form
        }

        if (Object.keys(validate(formData, confirmPassword)).length === 0 && !emailExists) {
            try {
                const response = await Supabase.from("messy-data").upsert([
                    {
                        fullname: formData.fullname,
                        email: formData.email,
                        phone: formData.phone,
                        country: formData.country,
                        password: formData.password,
                    },
                ]);
                console.log(response);
                navigate("/login");
            } catch (error) {
                console.error('Error submitting form:', error.message);
            } finally {
                setIsLoading(false); // Set loading to false after submission
            }
        } else {
            setIsLoading(false); // If there are validation errors, stop loading
        }
    };

    const validate = (values, confirmPassword) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.fullname) {
            errors.fullname = "Full name is required";
        } else if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email";
        } else if (!values.phone) {
            errors.phone = "Phone number is required";
        } else if (!values.country) {
            errors.country = "Select your country";
        } else if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password !== confirmPassword) {
            errors.confirmPassword = "Passwords do not match";  // Check if passwords match
        }

        return errors;
    };

    return (
        <div>
            <div className="registration">

                <div className="reg-l">
                    {/* Additional content for left side */}
                </div>

                <div className="reg-r">
                    <div className="reg-c">
                        <Link to='/'><IoArrowBack style={{cursor:'pointer'}}/></Link>
                        <h3>Create An Account</h3>
                        <form className='r-form'>
                            <div className="form-c">
                                <h6>Full Name</h6>
                                <input 
                                    type="text" 
                                    placeholder='Enter your full name' 
                                    name="fullname"
                                    value={formData.fullname}
                                    onChange={handleChange} 
                                />
                                <p style={{ color: "red", fontSize: "14px" }}>
                                    {formErrors.fullname}
                                </p>

                                <h6>Email Address</h6>
                                <input 
                                    type="email" 
                                    placeholder='Enter your email address' 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange} 
                                />
                                <p style={{ color: "red", fontSize: "14px" }}>
                                    {formErrors.email}
                                </p>
                                {emailExistsError && (
                                    <p style={{ color: "red", fontSize: "14px" }}>
                                        {emailExistsError}
                                    </p>
                                )}

                                <h6>Phone Number</h6>
                                <input 
                                    type="tel" 
                                    placeholder='Enter your phone number' 
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange} 
                                />
                                <p style={{ color: "red", fontSize: "14px" }}>
                                    {formErrors.phone}
                                </p>

                                <h6>Country</h6>
                                <select 
                                    name="country" 
                                    id="country" 
                                    value={formData.country}
                                    onChange={handleChange} 
                                >
                                    <option value="">Select your country</option>
                                    {countries.map((country, index) => (
                                        <option key={index} value={country}>{country}</option>
                                    ))}
                                </select>
                                <p style={{ color: "red", fontSize: "14px" }}>
                                    {formErrors.country}
                                </p>

                                <h6>Password</h6>
                                <input 
                                    type="password" 
                                    placeholder='Enter your password' 
                                    className='pass' 
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange} 
                                />
                                <p style={{ color: "red", fontSize: "14px" }}>
                                    {formErrors.password}
                                </p>

                                <h6>Confirm Password</h6>
                                <input 
                                    type="password" 
                                    placeholder='Confirm your password' 
                                    className='pass'
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                />
                                <p style={{ color: "red", fontSize: "14px" }}>
                                    {formErrors.confirmPassword}
                                </p>

                                <button onClick={handleSubmit} disabled={isLoading}>
                                    {isLoading ? 'Signing Up...' : 'Sign Up'}
                                </button>

                                <p>Already have an account? <Link to='/login'>Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
