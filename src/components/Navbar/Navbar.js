import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling
import LoginOverlay from '../Login/LoginOverlay'; // Import the LoginOverlay component
import Profile from '../Images/profile.jpeg';

function Navbar({ aboutRef, homeRef }) {
  const [showMenu, setShowMenu] = useState(false);
  const [isOverlay, setisOverlay] = useState(false); // State to control the Login overlay
  const [loggedin, setLoggedin] = useState(false);
  const [profilename, setProfileName] = useState('');
  const [currentTheme, setCurrentTheme] = useState('light'); // Add theme state

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeLoginOverlay = () => {
    setisOverlay(false);
  };

  const handleHome = (e) => {
    e.preventDefault();
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAbout = (e) => {
    e.preventDefault();
    console.log(aboutRef);
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setisOverlay(true);
  };

  // Function to toggle theme
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <nav className={`navbar ${currentTheme === 'dark' ? 'dark-theme' : ''}`}>
        <div className="navbar-logo">ChefCuisineCraft</div>
        <div className={`navbar-links ${showMenu ? 'show-menu' : ''}`}>
          <a href="/" onClick={handleHome}>
            Home
          </a>
          <a href="/about" onClick={handleAbout}>
            About Us
          </a>
          <a href="/login" onClick={handleLogin}>
            Login
          </a>
        </div>
        <div className="navbar-profile" style={{ textAlign: 'center' }}>
          <img src={Profile} alt="Profile" />
          {loggedin && <div>{profilename}</div>}
        </div>
        <div className="theme-toggle" onClick={toggleTheme}>
          {currentTheme === 'light' ? 'Dark Theme' : 'Light Theme'}
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${showMenu ? 'active' : ''}`}></div>
          <div className={`bar ${showMenu ? 'active' : ''}`}></div>
          <div className={`bar ${showMenu ? 'active' : ''}`}></div>
        </div>
      </nav>
      {isOverlay && (
        <LoginOverlay
          onClose={closeLoginOverlay}
          setisOverlay={setisOverlay}
          setLoggedin={setLoggedin}
          setProfileName={setProfileName}
        />
      )}
    </div>
  );
}

export default Navbar;
