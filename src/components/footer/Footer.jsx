import "./Footer.css";
import githubIcon from "../../assets/icons/github-light.svg";
import linkedInIcon from "../../assets/icons/linkedin.svg";
import gmailIcon from "../../assets/icons/gmail.svg";
import XIcon from "../../assets/icons/x.svg";

function Footer() {
  return (
    <div id="footer">
      <div className="footer-content">
        <div className="text">
          <h2>Hanson.dev</h2>
          <p>
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
        <ul className="social-icons">
          <li>
            <a
              href="https://github.com/JHansonKAttah92"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="GitHub" className="social-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/joshua-hanson-957136336"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedInIcon} alt="LinkedIn" className="social-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/joshuahanson500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={XIcon} alt="X" className="social-icon" />
            </a>
          </li>
          <li>
            <a
              href="mailto:joshuahanson500@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gmailIcon} alt="Gmail" className="social-icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
