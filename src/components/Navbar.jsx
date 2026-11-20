
import React, { useEffect, useState } from 'react'
import '../styles/Navbar.css'

const Navbar = () => {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('portfolio-theme') === 'dark'
  })

  const [menuOpen, setMenuOpen] = useState(false)

  // Apply theme to the entire website
  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'dark' : 'light'
    )

    localStorage.setItem(
      'portfolio-theme',
      darkMode ? 'dark' : 'light'
    )
  }, [darkMode])

  // Toggle dark and light themes
  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode)
  }

  // Close mobile menu after clicking a link
  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">

      {/* Logo */}
      <a href="#home" className="navbar-logo" onClick={closeMenu}>
        Aswathi<span>.</span>
      </a>

      {/* Navigation Links */}
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>

        <li>
          <a href="#home" onClick={closeMenu}>Home</a>
        </li>

        <li>
          <a href="#about" onClick={closeMenu}>About</a>
        </li>

        <li>
          <a href="#skills" onClick={closeMenu}>Skills</a>
        </li>

        <li>
          <a href="#projects" onClick={closeMenu}>Projects</a>
        </li>

        <li>
          <a href="#education" onClick={closeMenu}>Education</a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </li>

      </ul>

      {/* Theme Toggle */}
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
        title={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      {/* Mobile Menu Button */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

    </nav>
  )
}

export default Navbar
