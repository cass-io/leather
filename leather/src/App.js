import React from 'react';
import './App.css'; // Use the Black Mage Inspired CSS from before
import profileImage from './profile.jpg'; // Import your image

function App() {
  return (
    <div className="portfolio">
      <header className="portfolio-header">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={profileImage} alt="Profile" />
          <nav>
            <ul>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div>
          {/* Add social media icons here (e.g., LinkedIn, GitHub) */}
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1>[Your Name]</h1>
          <p>Full-Stack Developer | Problem Solver | Innovator</p>
          <p>Building impactful web applications with cutting-edge technologies.</p>
          <a href="#projects" className="hero-button">View My Work</a>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Project 1: [Project Name]</h3>
            <p>[Detailed description including impact and results]</p>
            <p><strong>Technologies:</strong> React, Node.js, PostgreSQL</p>
            <a href="[Project Link]" target="_blank" rel="noopener noreferrer">View Project</a>
            <a href="[GitHub Link]" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className="project-card">
            <h3>Project 2: [Project Name]</h3>
            <p>[Detailed description including impact and results]</p>
            <p><strong>Technologies:</strong> Python, Django, AWS</p>
            <a href="[Project Link]" target="_blank" rel="noopener noreferrer">View Project</a>
            <a href="[GitHub Link]" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          {/* Add more project cards */}
        </div>
      </section>

      <section id="skills" className="skills-section">
        <h2>Skills & Technologies</h2>
        <div className="skills-list">
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>Django</li>
            <li>SQL/NoSQL</li>
            <li>AWS/Azure/GCP</li>
            {/* Add more skills */}
          </ul>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Me</h2>
        <div className="about-content">
          <p>[Your professional bio, highlighting your passion, experience, and career goals.]</p>
          <p>I am passionate about [Your passion] and always eager to learn new technologies.</p>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <div className="contact-info">
          <p>Email: [Your Email]</p>
          <p>LinkedIn: [Your LinkedIn Profile URL]</p>
          <p>GitHub: [Your GitHub Profile URL]</p>
          {/* Add more contact info */}
        </div>
      </section>

      {/* Optional: Add a footer */}
    </div>
  );
}

export default App;