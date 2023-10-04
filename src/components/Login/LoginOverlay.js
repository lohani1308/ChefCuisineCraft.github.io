import React from 'react';
import './Login.css'; // Import your CSS file for styling

function LoginOverlay({ onClose }) {

  const handleClick=()=>{

  }

  return (
    <div className="login-overlay">
      <div className="login-container">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" />
          </div>
          <button className="button" type="submit">Login</button>
        </form>
        <div className="or-divider">Or</div>
        <button className="google-button">Login with Google</button>
        <button className="github-button">Login with GitHub</button>
        <div onClick={ handleClick } className="registration-link">
          Don't have an account? <span>Register here</span>
        </div>
      </div>
    </div>
  );
}

export default LoginOverlay;
