
import React from 'react'
import '../styles/Education.css'

const Education = () => {
  return (
    <section className="education" id="education">

      <div className="education-heading">
        <p className="section-subtitle">MY BACKGROUND</p>
        <h2>Education</h2>
        <p>
          My academic journey and educational background.
        </p>
      </div>

      <div className="education-container">

        <div className="education-card">

          <div className="education-icon">
            <span>🎓</span>
          </div>

          <div className="education-details">
            <span className="education-level">
              Postgraduate Degree
            </span>

            <h3>M.Sc. Computer Science</h3>

            <p className="education-institute">
            Calicut University
            </p>

            <p className="education-description">
              Focused on computer science fundamentals,
              programming concepts, software development
              and modern technologies.
            </p>

            
          </div>

        </div>

        <div className="education-card">

          <div className="education-icon">
            <span>📚</span>
          </div>

          <div className="education-details">
            <span className="education-level">
              Undergraduate Degree
            </span>

            <h3>BSC Computer science</h3>

            <p className="education-institute">
            NMSM Govt College Kalpetta
            </p>

            <p className="education-description">
              Focused on computer science fundamentals,
              programming concepts, software development
              and modern technologies.
            </p>

            
          </div>

        </div>

      </div>

    </section>
  )
}

export default Education
