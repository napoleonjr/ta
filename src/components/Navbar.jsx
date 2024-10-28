import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <section className="navbar">
        <div className="logo">
            <h1>CHRIS.DEV</h1>
        </div>
        <div className="socials">
            <ul className="social-icons">
                <p><a href="#facebook"><FontAwesomeIcon icon={faFacebook} /></a></p>
                <p><a href="#instagram"><FontAwesomeIcon icon={faInstagram} /></a></p>
                <p><a href="#github"><FontAwesomeIcon icon={faGithub} /></a></p>
                <p><a href="#stackoverflow"><FontAwesomeIcon icon={faStackOverflow} /></a></p>
            </ul>    
        </div>
        <div className="resume">
            <button><a href="#resume">Resume</a></button>
        </div>
    </section>
  );
};

export default Navbar;