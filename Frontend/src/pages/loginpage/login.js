import './login.css';
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [isActive, setIsActive] = useState(false);
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });

    const handleRegisterClick = () => setIsActive(true);
    const handleLoginClick = () => setIsActive(false);

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/v1/signup', registerData);
            alert(response.data.message || 'Registration successful!');
        } catch (error) {
            console.error('Error during registration:', error);
            alert(error.response?.data?.error || 'Registration failed.');
        }
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/v1/login', loginData);
            localStorage.setItem('token', response.data.token);
            alert('Login successful!');
        } catch (error) {
            console.error('Error during login:', error);
            alert(error.response?.data?.error || 'Login failed.');
        }
    };

    return (
        <div className='login-parent'>
            <div className={`container ${isActive ? 'active' : ''}`} id="container">
                {/* Sign-Up Form */}
                <div className="form-container sign-up">
                    <form onSubmit={handleRegisterSubmit}>
                        <h1>Register</h1>
                        <span>Use your email for registration</span>
                        <input
                            type="text"
                            placeholder="Username"
                            value={registerData.name}
                            onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={registerData.email}
                            onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={registerData.password}
                            onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                        />
                        <button type="submit">Register</button>
                    </form>
                </div>

                {/* Sign-In Form */}
                <div className="form-container sign-in">
                    <form onSubmit={handleLoginSubmit}>
                        <h1>Login</h1>
                        <span>Use your email and password</span>
                        <input
                            type="email"
                            placeholder="Email"
                            value={loginData.email}
                            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={loginData.password}
                            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        />
                        <a href="/">Forget Your Password?</a>
                        <button type="submit">Login</button>
                    </form>
                </div>

                {/* Toggle Buttons */}
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Already Have an Account!</h1>
                            <p>Login and start your fashion trip</p>
                            <button id="login" onClick={handleLoginClick}>Login</button>
                        </div>

                        <div className="toggle-panel toggle-right">
                            <h1>Hi Fashionista</h1>
                            <p>Ready to transform your style?</p>
                            <button id="register" onClick={handleRegisterClick}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

