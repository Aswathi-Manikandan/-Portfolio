
import React from 'react'
import '../styles/Skills.css'

const Skills = () => {

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js']
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'REST APIs']
    },
    {
      title: 'Database',
      skills: ['MongoDB']
    },
    {
      title: 'Programming',
      skills: ['JavaScript', 'Java']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman']
    }
  ]

  return (
    <section className="skills" id="skills">

      <div className="skills-heading">
        <p className="section-subtitle">WHAT I KNOW</p>
        <h2>My Technical Skills</h2>
        <p>
          Technologies and tools I use to build
          and explore web applications.
        </p>
      </div>

      <div className="skills-container">

        {skillCategories.map((category, index) => (
          <div className="skill-category" key={index}>

            <h3>{category.title}</h3>

            <div className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex}>{skill}</span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Skills
