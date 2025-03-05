import React from 'react';
import './App.css';
import profileImage from './profile.jpg';

function App() {
  return (
    <div className="portfolio">
      <header className="portfolio-header">
        <div className="header-content">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <nav className="nav-menu">
            <ul>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="social-icons">
          {/* Add social media icons here (e.g., LinkedIn, GitHub) */}
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1>Cassius Child</h1>
          <p>Computer Science Sophomore | Wilmington University</p>
          <p>Passionate about narrative content, AI, and the impact of technology on humanity.</p>
          <a href="#projects" className="hero-button">View My Work</a>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Project 1: [Project Name - Add a Project]</h3>
            <p>[Detailed description including impact and results]</p>
            <p><strong>Technologies:</strong> React, Node.js, [Add other technologies]</p>
            <div className="project-links">
              <a href="[Project Link]" target="_blank" rel="noopener noreferrer">View Project</a>
              <a href="[GitHub Link]" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <div className="project-card">
            <h3>Project 2: [Project Name - Add a Project]</h3>
            <p>[Detailed description including impact and results]</p>
            <p><strong>Technologies:</strong> Python, [Add other technologies]</p>
            <div className="project-links">
              <a href="[Project Link]" target="_blank" rel="noopener noreferrer">View Project</a>
              <a href="[GitHub Link]" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          {/* Add more project cards */}
        </div>
      </section>

      <section id="skills" className="skills-section">
        <h2>Skills & Technologies</h2>
        <div className="skills-list">
          <ul>
            <li>Node.js</li>
            <li>React</li>
            <li>JavaScript (ES6+)</li>
            <li>Python</li>
            <li>Java</li>
            {/* Add more skills */}
          </ul>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Me</h2>
        <div className="about-content">
          <p>Hello! I'm Cassius Child, a computer science sophomore at Wilmington University. I'm deeply passionate about the intersection of narrative content, artificial intelligence, and the profound impact of technological innovation on humanity. I'm always eager to explore new technologies and understand how they shape our world.</p>
          <p>My current language proficiencies include Node.js, React, JavaScript, Python, and Java. I'm continuously expanding my skill set to tackle complex challenges and contribute to meaningful projects.</p>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <div className="contact-info">
          <p>Email: cassiusChild@gmail.com</p>
          <p>LinkedIn: https://www.linkedin.com/in/cassius-child-1b0951211/</p>
          <p>GitHub: [Your GitHub Profile URL]</p>
          {/* Add more contact info */}
        </div>
      </section>

      {/* Optional: Add a footer */}
    </div>
  );
}

export default App;