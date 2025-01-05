import './login.css';
import React, { useState } from 'react';

const Login = () => {
    const [isActive, setIsActive] = useState(false);

    const handleRegisterClick = () => {
        setIsActive(true); // Toggle the "active" class
    };

    const handleLoginClick = () => {
        setIsActive(false); // Remove the "active" class
    };

    return (
        <div className='login-parent'>
            <div className={`container ${isActive ? 'active' : ''}`} id="container">
                {/* Sign-Up Form */}
                <div className="form-container sign-up">
                    <form>
                        <h1>Register</h1>
                        <span>Use your email for registration</span>
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Register</button>
                    </form>
                </div>

                {/* Sign-In Form */}
                <div className="form-container sign-in">
                    <form>
                        <h1>Login</h1>
                        <span>Use your email and password</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
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
                            <button
                                className="hidden"
                                id="login"
                                onClick={handleLoginClick} // Handle login click
                            >
                                Login
                            </button>
                        </div>

                        <div className="toggle-panel toggle-right">
                            <h1>Hi Fashionista</h1>
                            <p>Ready to transform your style?</p>
                            <button
                                className="hidden"
                                id="register"
                                onClick={handleRegisterClick} // Handle register click
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;