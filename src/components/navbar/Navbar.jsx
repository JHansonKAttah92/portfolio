//import { useState } from "react";
import "./Navbar.css";
import myResume from "../../assets/documents/Joshua_Hanson_Portfolio_Resume.pdf";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(true);

  const handleMenu = (e) => {
    if(e.target.matches('.menuIcon')) {
      setOpenMenu(!openMenu);
    }
  }

  const menu = `links && ${openMenu ? 'active' : ''}`;
  const closeMenu = () => setOpenMenu(true);

  function scrollToSection(id) {
    const navbarLink = document.getElementById(id);
    if (navbarLink) {
      navbarLink.scrollIntoView();
    }
  }

  const scrollToLink = () => scrollToSection();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="nav-logo">
          <a
            href="#hero"
            className="logo-link"
            onClick={() => scrollToLink("hero")}
          >
            Hanson.Dev
          </a>
        </h2>
        <span className="line"></span>
        {
          openMenu ? <MenuIcon
          className="menuIcon"
          size={36}
          color="#2563EB"
          strokeWidth={1}
          onClick={handleMenu}
        /> : <X
          className="menuIcon"
          size={36}
          color="#2563EB"
          strokeWidth={1}
          onClick={handleMenu}
        />
        }
        
        <div className={menu}>
          <ul className="nav-menu">
            <li className="nav-item">
              <a
                href="#about"
                className="nav-link"
                onClick={() => scrollToSection("about")}
                onClick={closeMenu}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#skills"
                className="nav-link"
                onClick={() => scrollToSection("skills")}
                onClick={closeMenu}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                className="nav-link"
                onClick={() => scrollToSection("projects")}
                onClick={closeMenu}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className="nav-link"
                onClick={() => scrollToSection("contact")}
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>
          <a href={myResume} className="resume" aria-label="Download Resume" download="Hanson_Resume.pdf">
            My resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
