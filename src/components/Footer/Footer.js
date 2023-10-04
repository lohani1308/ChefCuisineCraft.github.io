import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-content">
          <div className="social-media">
            <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
          <p>&copy; 2023 Your Company Name</p>
        </div>
      
    </footer>
  );
}

export default Footer;
