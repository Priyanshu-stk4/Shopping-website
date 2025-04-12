import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import loginImage from "../assets/images/login-img3.jpg";
import google from "../assets/images/google.png";
import axios from 'axios';

function Loginpage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [token, setToken] = useState(null);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login', {
        username,
        password,
      });

      const tokenFromServer = response.data.token;
      setToken(tokenFromServer);
      localStorage.setItem('token', tokenFromServer);
      console.log('Login successful. Token:', tokenFromServer);
      navigate('/home');
    } catch (err) {
      console.error('Login failed:', err);
      setError('Invalid credentials or network error.');
    }
  };

  return (
    <div className="login-background">
      <div id="login">
        <div className="image-section">
          <img src={loginImage} alt="Login" />
        </div>
        <div className="login-form">
          <div className="login-card">
            <h1><b>Welcome back!</b></h1>
            <p>Please enter your details</p>
            <form>
              <div className="input-group">
                <label>username</label>
                <input type="email" value={username}
                  onChange={(e) => setUsername(e.target.value)} placeholder="username" />
              </div>
              <div className="input-group">
                <label>Password</label>
                <div className="password-wrapper">
                  <input value={password}
                    onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
                  <span className="eye-icon">👁</span>
                </div>
              </div>
              <div className="remember-forgot">
                <label>
                  <input checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)} type="checkbox" /> Remember for 30 days
                </label>
                <a href="#">Forgot password?</a>
              </div>
              <button type="submit" onClick={handleLogin} className="login-btn">Log In</button>
              {/* <button className="google-btn">
                <img src={google} alt="Google" /> Log in with Google
              </button> */}
              {error && (
                <div>{error}</div>
              )}
            </form>
            <p className="signup-link">
              Don’t have an account? <a href="/signup">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
