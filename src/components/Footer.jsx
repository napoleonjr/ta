import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
        <div className="logo">
            <h1>CHRIS.DEV</h1>
        </div>
        <div className="copy">
            <p>&copy; 2024 John Christian Dellera</p>
        </div>
        <div className="footer-icons">
            <ul className="social-icons">
                <p><a href="#facebook"><FontAwesomeIcon icon={faFacebook} /></a></p>
                <p><a href="#instagram"><FontAwesomeIcon icon={faInstagram} /></a></p>
                <p><a href="#github"><FontAwesomeIcon icon={faGithub} /></a></p>
                <p><a href="#stackoverflow"><FontAwesomeIcon icon={faStackOverflow} /></a></p>
            </ul>
        </div>
        <div className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
        </div>
    </footer>
  );
};

export default Footer;