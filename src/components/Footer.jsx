
import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <h2>Aswathi<span>.</span></h2>

          <p>
            Turning ideas into meaningful digital experiences.
            Always learning, building and growing.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-navigation">

          <h3>Quick Links</h3>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

        </div>

        {/* Social Links */}
        <div className="footer-connect">

          <h3>Let's Connect</h3>

          <p>
            Have an idea or opportunity?
            I'd love to hear from you.
          </p>

          <div className="footer-socials">

            <a
              href="https://www.linkedin.com/in/aswathi-manikandan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/Aswathi-Manikandan"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

          </div>

        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Aswathi Manikandan.
          All rights reserved.
        </p>

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>

      </div>

    </footer>
  )
}

export default Footer
