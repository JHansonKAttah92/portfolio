import "./Navbar.css";
import Hero from "../hero/Hero";
import About from "../about/About";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
//import { useState } from "react";
import { MenuIcon } from "lucide-react";

function Navbar() {
  // const [display, setDisplay] = useState(false);

  // const handleNavbarDisplay = () => {
  //   setDisplay((prev) => !prev);
  // };

  function scrollToSection(id) {
    const navbarLink = document.getElementById(id);
    if(navbarLink) {
      navbarLink.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="nav-logo">
            <NavLink to="/" className="logo-link" onClick={() => scrollToSection('hero')}>
              Hanson.Dev
            </NavLink>
          </h2>
          <MenuIcon
            className="menuIcon"
            size={48}
            color="#2563EB"
            strokeWidth={1}
          />
          <ul className="nav-menu">
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" onClick={() => scrollToSection('about')}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/skills" className="nav-link" onClick={() => scrollToSection('skills')}>
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className="nav-link" onClick={() => scrollToSection('projects')}>
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" onClick={() => scrollToSection('contact')}>
                Contact
              </NavLink>
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
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;
