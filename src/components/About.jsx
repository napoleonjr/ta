import React from 'react';

const About = () => {
  return (
    <section className="about">
        <div className="left">
            <h2>About Me</h2>
            <p>
                I'm a dedicated full-stack developer with a strong passion <br />
                for crafting innovative web applications. My expertise <br />
                lies in list of technologies HTML, CSS, JavaScript, <br />
                React, Node.js, MongoDB. I'm skilled in building scalable, <br />
                user-friendly, and responsive web solutions that meet <br />
                the highest standards of quality. I enjoy collaborating <br />
                with cross-functional teams and staying up-to-date <br />
                with the latest industry trends to deliver <br />
                exceptional results.
            </p>
        </div>
        <div className="right">
            <img src="about.png" alt="christian" />
        </div>
    </section>
  );
};

export default About;