
import React from 'react'
import '../styles/MiniProjects.css'

const MiniProjects = () => {

  const miniProjects = [
    {
      title: 'Project Coming Soon',
      description:
        'A new mini project is currently being planned. Stay tuned for updates!',
      technologies: ['React', 'JavaScript'],
      status: 'Coming Soon',
      icon: '✦'
    },
    {
      title: 'Project Coming Soon',
      description:
        'Another exciting mini project will be added here soon.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      status: 'Coming Soon',
      icon: '✧'
    },
    {
      title: 'Project Coming Soon',
      description:
        'Exploring new ideas and building small applications to improve my development skills.',
      technologies: ['React', 'CSS'],
      status: 'Coming Soon',
      icon: '♡'
    }
  ]

  return (
    <section className="mini-projects" id="mini-projects">

      <div className="mini-projects-heading">
        <p className="section-subtitle">SMALL IDEAS, BIG LEARNING</p>

        <h2>Mini Projects</h2>

        <p>
          A collection of small applications and experiments
          built while exploring new technologies and improving
          my development skills.
        </p>
      </div>

      <div className="mini-projects-container">

        {miniProjects.map((project, index) => (
          <div className="mini-project-card" key={index}>

            <div className="mini-project-top">
              <span className="mini-project-icon">
                {project.icon}
              </span>

              <span className="mini-project-status">
                {project.status}
              </span>
            </div>

            <h3>{project.title}</h3>

            <p className="mini-project-description">
              {project.description}
            </p>

            <div className="mini-project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex}>{tech}</span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default MiniProjects
