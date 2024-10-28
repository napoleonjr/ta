import React from 'react';

const Projects = () => {
  return (
    <section className="projects">
        <h2>Projects</h2>
        <div className="up">
            <div className="proj1">
                <h3>Fitness Tracking App</h3>
                    <p>
                        A mobile app that allows users to track their <br />
                        workouts, calories, and fitness goals, <br />
                        providing features like activity tracking, <br />
                        nutrition logging, and progress monitoring.
                    </p>
                <button>See More</button>
            </div>
            <div className="proj2">
                <h3>Portfolio Website Builder</h3>
                    <p>
                        A platform that enables users to create <br />
                        personalized online portfolios to showcase <br />
                        their skills and projects, offering customizable <br />
                        templates, portfolio sections, and integration <br />
                        with online platforms.
                    </p>
                <button>See More</button>
            </div>
            <div className="proj2">
                <h3>Recipe Management App</h3>
                    <p>
                        A tool for organizing and managing recipes, <br />
                        including recipe creation, ingredient lists, <br />
                        nutritional information, and meal planning <br />
                    </p>
                <button>See More</button>
            </div>
        </div>
        <div className="down">
            <div className="proj4">
                <h3> Event Planning Platform</h3>
                    <p>
                        A platform for creating, managing, and <br />
                        promoting events, featuring event creation <br />
                        tools,ticketing systems, guest lists, and 
                        venue<br /> management.
                    </p>
                <button>See More</button>
            </div>
            <div className="proj5">
                <h3>Budgeting and Expense <br />Tracking App</h3>
                    <p>
                        A financial management tool that helps<br /> users track 
                        their income, expenses, and  <br />savings, providing
                        features like budgeting,<br /> expense categorization, 
                       and <br />financial reports. 
                    </p>
                <button>See More</button>
            </div>
            <div className="proj6">
                <h3>Online Gaming Platform</h3>
                    <p>
                        A platform for playing multiplayer games .<br />
                        online, including game lobbies, <br />matchmaking, .
                        chat features, and <br />leaderboards..
                    </p>
                <button>See More</button>
            </div>
        </div>
    </section>
  );
};

export default Projects;