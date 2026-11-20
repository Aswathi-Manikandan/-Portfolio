
import React from 'react'
import '../styles/About.css'

const About = () => {
  return (
    <section className="about" id="about">

      <div className="about-heading">
        <h2>About Me</h2>
        <p>Get to know me better</p>
      </div>

      <div className="about-content">

        <div className="about-text">

          <h3>Passionate About Technology & Development</h3>

          <p>
            I am an M.Sc. Computer Science graduate with a
            strong interest in software development and
            modern web technologies.
          </p>

          <p>
            My journey in web development has helped me
            explore the MERN stack, including MongoDB,
            Express.js, React.js and Node.js. I enjoy
            understanding how applications work, developing
            interactive interfaces and exploring backend
            functionality.
          </p>

          <p>
            I believe that becoming a good developer is
            not just about writing code, but also about
            understanding problems, thinking logically
            and continuously improving my skills.
          </p>

        </div>

        <div className="about-details">

          <div className="about-card">
            <h4>Education</h4>
            <p>M.Sc. Computer Science</p>
          </div>

          <div className="about-card">
            <h4>Area of Interest</h4>
            <p>Full Stack Web Development</p>
          </div>

          <div className="about-card">
            <h4>Technology Focus</h4>
            <p>MERN Stack</p>
          </div>

          <div className="about-card">
            <h4>Career Goal</h4>
            <p>Software Development</p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default About
