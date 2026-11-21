
import React from 'react'
import ProjectCard from '../components/ProjectCard'
import '../styles/Projects.css'

const Projects = () => {

  const projects = [
    {
      title: 'Personal Portfolio Website',
      description:
        'A modern and responsive personal portfolio showcasing my profile, technical skills, education, projects and development journey.',
      technologies: ['React', 'JavaScript', 'CSS', 'Vite'],
      githubLink: '',
      liveLink: 'https://portfolio-eta-vert-64.vercel.app/',
      status: 'completed'
    },
    {
      title: 'Driving School Website',
      description:
        'A website project planned to help a driving school showcase its courses, services, contact information and other important details.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubLink: '',
      liveLink: '',
      status: 'in-progress'
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
            status={project.status}
          />
        ))}

      </div>

    </section>
  )
}

export default Projects
