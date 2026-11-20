
import React from 'react'
import ProjectCard from '../components/ProjectCard'
import '../styles/Projects.css'

const Projects = () => {

  const projects = [
    {
      title: 'Personal Portfolio Website',
      description:
        'A responsive personal portfolio to showcase my technical skills, education, projects and development journey.',
      technologies: ['React', 'JavaScript', 'CSS'],
      githubLink: '',
      liveLink: ''
    },
    {
      title: 'Driving School Website',
      description:
        'A website concept for a driving school to present its courses, services, contact information and other details.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubLink: '',
      liveLink: ''
    }
  ]

  return (
    <section className="projects" id="projects">

      <div className="projects-heading">
        <p className="section-subtitle">MY WORK</p>

        <h2>Featured Projects</h2>

        <p>
          Turning ideas into meaningful digital experiences
          through creativity and code.
        </p>
      </div>

      <div className="projects-container">

        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}

      </div>

    </section>
  )
}

export default Projects
