
import React from 'react'
import '../styles/Home.css'

const Home = () => {
  return (
    <section className="home" id="home">

      <div className="home-content">

        <p className="home-greeting">
          Hello, I'm
        </p>

        <h1>Aswathi Manikandan</h1>

        <h2>Full Stack Developer</h2>

        
        <p className="home-description">
        I'm an M.Sc. Computer Science graduate with a passion
        for turning ideas into meaningful digital experiences.
        Fascinated by the world of web development, I'm building
        my expertise in the MERN stack, creating responsive
        interfaces and exploring how technology can solve
        real-world challenges. I believe in learning by building,
        improving through challenges, and growing with every
        project I create.
        </p>


        <div className="home-buttons">

          <a href="#projects" className="btn-primary">
            View Projects
          </a>

          <a href="/resume.pdf" className="btn-secondary" download>
            Download Resume
          </a>

        </div>

      </div>

      <div className="home-image">
        <img src="/images/Aswathi 1.png" alt="Aswathi profile" />
      </div>

    </section>
  )
}

export default Home
