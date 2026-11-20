
import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <section className="contact" id="contact">

      <div className="contact-wrapper">

        {/* Left Section */}
        <div className="contact-left">

          <span className="contact-tag">
            ✦ LET'S CONNECT
          </span>

          <h2>
            Let's make
            <span> something</span>
            <br />
            amazing together.
          </h2>

          <p className="contact-description">
            I'm always excited to connect with people,
            explore new opportunities and collaborate
            on creative ideas. Have something in mind?
            Let's talk!
          </p>

          <a
            href="tel:+916235465935"
            className="contact-main-button"
          >
            Call Me
            <span>↗</span>
          </a>

          <div className="contact-socials">

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

        {/* Right Section */}
        <div className="contact-right">

          {/* Gmail Card */}
          <div className="contact-card email-card">

            <div className="contact-card-icon">
              ✉
            </div>

            <div className="contact-card-details">

              <span className="contact-card-label">
                MY EMAIL ADDRESS
              </span>

              <h3>Gmail</h3>

              <p className="contact-email">
                aswathiachus935@gmail.com
              </p>

            </div>

          </div>

          {/* Phone Card */}
          <div className="contact-card phone-card">

            <div className="contact-card-icon">
              ☎
            </div>

            <div className="contact-card-details">

              <span className="contact-card-label">
                GIVE ME A CALL
              </span>

              <h3>Phone</h3>

              <a href="tel:+916235465935">
                +91 6235465935
              </a>

            </div>

            <span className="contact-arrow">
              ↗
            </span>

          </div>

          {/* LinkedIn Card */}
          <div className="contact-card linkedin-card">

            <div className="contact-card-icon">
              in
            </div>

            <div className="contact-card-details">

              <span className="contact-card-label">
                PROFESSIONAL NETWORK
              </span>

              <h3>LinkedIn</h3>

              <a
                href="https://www.linkedin.com/in/aswathi-manikandan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect with me
              </a>

            </div>

            <span className="contact-arrow">
              ↗
            </span>

          </div>

          {/* GitHub Card */}
          <div className="contact-card github-card">

            <div className="contact-card-icon">
              ⌘
            </div>

            <div className="contact-card-details">

              <span className="contact-card-label">
                EXPLORE MY CODE
              </span>

              <h3>GitHub</h3>

              <a
                href="https://github.com/Aswathi-Manikandan"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore my repositories
              </a>

            </div>

            <span className="contact-arrow">
              ↗
            </span>

          </div>

          {/* Bottom Message */}
          <div className="contact-note-card">

            <span>✦</span>

            <p>
              Open to opportunities, collaborations
              and meaningful conversations.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact
