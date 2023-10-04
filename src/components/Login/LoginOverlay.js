import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for styling
import Register from '../Register/Register';

function LoginOverlay({ onClose }) {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleClick = () => {
    setIsRegisterOpen(true);
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
        <button className="registration-link" onClick={handleClick}>
          Don't have an account? <span>Register here</span>
        </button>
      </div>
      {isRegisterOpen && <Register onClose={()=>setIsRegisterOpen(false)}/>}
    </div>
  );
}

export default LoginOverlay;
