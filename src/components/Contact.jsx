import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section className="contact">
        <h2>Contact</h2>
        <div className="contact-content">
            <div className="contact-pic">
                <img src="contact.png" alt="christian" width={'270px'}/>
            </div>
            <div className="contact-info">
                <p><a href="#facebook"><FontAwesomeIcon icon={faFacebook} /> &nbsp; @johnchristian</a></p>
                <p><a href="#instagram"><FontAwesomeIcon icon={faInstagram} /> &nbsp;&nbsp;  John Christian Dellera</a></p>
                <p><a href="#github"><FontAwesomeIcon icon={faGithub} /> &nbsp; christian-github</a></p>
                <p><a href="#stackoverflow"><FontAwesomeIcon icon={faStackOverflow} /> &nbsp;&nbsp; CHRIS.CODER.DEV</a></p>
            </div>
        </div>
    </section>
  );
};

export default Contact;