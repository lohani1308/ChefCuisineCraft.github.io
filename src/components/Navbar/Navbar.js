import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling
import LoginOverlay from '../Login/LoginOverlay'; // Import the LoginOverlay component

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isOverlay,setisOverlay] = useState(true); // State to control the Login overlay
  const [loggedin,setLoggedin]=useState(false);
  const [profilename,setProfileName]=useState('');
  

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeLoginOverlay = () => {
    setisOverlay(false);
  };

  return (
    <div>
        <nav className="navbar"> 
        <div className="navbar-logo">ChefCuisineCraft</div>
        <div className={`navbar-links ${showMenu ? 'show-menu' : ''}`}>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/login" onClick={() => setisOverlay(false)}>Login</a> 
        </div>
        <div className="navbar-profile">
            {loggedin && (<div>{profilename}</div>) }
            <img src="profile.jpg" alt="Profile" />
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
