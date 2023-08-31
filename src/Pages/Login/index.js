import React, { useState, useContext } from 'react';
import validationSchema from '../../Components/Utilis/validation/login'
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import AuthContext from '../../Context/AuthContext';
import img from "../../Components/Utilis/images/About.png";

import './style.css';

const Login = () => {
    const { login } = useContext(AuthContext);

    const navigate = useNavigate();
    function navToHome() {
        navigate('/')
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();

    const clear = () => {
        setEmail('');
        setPassword('');
        setError(null);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setIsLoading(true);
            const userData = {
                email,
                password,
            };

            await validationSchema.validate(userData, {
                abortEarly: false,
            });

            const response = await fetch('https://my-api-url.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                login(userData);
                clear();
                setIsLoading(false);
                navToHome();
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'An error occurred');
                setIsLoading(false);
            }
        } catch (err) {
            setError(
                err.response
                    ? err.response.data.message
                    : err.errors && err.errors.length > 0
                        ? err.errors[0]
                        : 'An error occurred'
            );

            setIsLoading(false);
        }
    };

    // const handleSubmit = async (event) => {
    //     try {
    //         event.preventDefault();
    //         setIsLoading(true);
    //         const userData = {
    //             email,
    //             password,
    //         };

    //         await validationSchema.validate(userData, {
    //             abortEarly: false,
    //         });
    //         const response = await fetch('https://my-json-server.typicode.com/MennatullahAsh/UsersAPI/users', userData);
    //         const data = await response.json();
    //         login(userData)
    //         clear();
    //         setIsLoading(false);
    //         navToHome();
    //     } catch (err) {
    //         setError(
    //             err.response
    //                 ? err.response.data.message
    //                 : err.errors && err.errors.length > 0
    //                     ? err.errors[0]
    //                     : "An error occurred"
    //         );

    //         setIsLoading(false);
    //     }
    // };

    return (
        <div className='all'>
            <div className="login-image-container">
                <img src={img} alt="Login" className="login-image" />
            </div>
            <div className="login-form-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Email</label>
                        <input
                            type="text"
                            id="username"
                            value={email}
                            
                            onChange={handleEmail}
                            placeholder='Email'
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" >Password </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePassword}
                            placeholder='Password'
                        />
                        {error && (
                            <Alert severity="error" style={{ marginTop: '8px' }}>
                                {error}
                            </Alert>
                        )}
                    </div>
                    <button className='button' onClick={handleSubmit}>
                        {isLoading ? (navToHome(), "Successfully") : 'Login'}
                    </button>
                    {/* <button onClick={() => { navToHome(); }}>
                        {isLoading ? "Successfully" : 'Login'}
                    </button> */}

                </form>
            </div>
        </div>
    );
}

export default Login;

