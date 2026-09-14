import "./About.css";
import githubIcon from "../../assets/icons/github-light.svg";
import linkedInIcon from "../../assets/icons/linkedin.svg";
import gmailIcon from "../../assets/icons/gmail.svg";
import profileImage from "../../assets/images/profile-pic.jpeg";

function About() {
  return (
    <div id="about">
      <span className="about-me">About</span>
      <div className="about-content">
        <img
          src={profileImage}
          className="profile-picture"
          alt="Profile Picture"
        />
        <div className="about-info">
          <h2>A bit about me</h2>
          <p>
            I'm a full-stack developer with 4 years of experience building web
            apps end to end. I care about clean code, fast interfaces, and
            solving real problems for real users. Outside of work I contribute
            to open source and write about frontend performance.
          </p>
          <ul className="social-media">
            <li>
              <a href="https://github.com/JHansonKAttah92" target="_blank">
                <img src={githubIcon} alt="GitHub" className="social-icon" />
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/joshua-hanson-957136336"
                target="_blank"
              >
                <img
                  src={linkedInIcon}
                  alt="LinkedIn"
                  className="social-icon"
                />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:joshuahanson500@gmail.com" target="_blank">
                <img src={gmailIcon} alt="Email" className="social-icon" />
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
