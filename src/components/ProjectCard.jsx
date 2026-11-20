
import React from 'react'

const ProjectCard = ({
  title,
  description,
  technologies,
  githubLink,
  liveLink
}) => {

  return (
    <div className="project-card">

      <div className="project-card-content">

        <span className="project-label">
          Featured Project
        </span>

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>

        <div className="project-links">

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          )}

          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}

        </div>

      </div>

    </div>
  )
}

export default ProjectCard
