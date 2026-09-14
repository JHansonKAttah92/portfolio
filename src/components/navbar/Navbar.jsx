//import { useState } from "react";
import "./Navbar.css";
import { MenuIcon } from "lucide-react";

function Navbar() {


  function scrollToSection(id) {
    const navbarLink = document.getElementById(id);
    if(navbarLink) {
      navbarLink.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="nav-logo">
            <a href="#hero" className="logo-link" onClick={() => scrollToSection('hero')}>
              Hanson.Dev
            </a>
          </h2>
          <MenuIcon
            className="menuIcon"
            size={48}
            color="#2563EB"
            strokeWidth={1}
          />
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link" onClick={() => scrollToSection('skills')}>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link" onClick={() => scrollToSection('projects')}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>
                Contact
              </a>
            </li>
          </ul>
          <a
            href="http://"
            target="_blank"
            className="resume"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </nav>
  );
}

export default Navbar;
