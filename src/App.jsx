import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import MiniProjects from './sections/MiniProjects'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
     <Projects/>
     <MiniProjects/>
     <Education/>
     <Contact/>
     <Footer/>
      </div>
  )
}

export default App