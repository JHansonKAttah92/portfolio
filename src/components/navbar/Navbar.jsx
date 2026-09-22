//import { useState } from "react";
import "./Navbar.css";
import myResume from "../../assets/documents/Joshua_Hanson_Portfolio_Resume.pdf";
import { MenuIcon } from "lucide-react";

function Navbar() {
  function scrollToSection(id) {
    const navbarLink = document.getElementById(id);
    if(navbarLink) {
      navbarLink.scrollIntoView();
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
            href={myResume}
            className="resume"
            download="Hanson_Resume.pdf"
          >
            My resume
          </a>
        </div>
      </nav>
  );
}

export default Navbar;
