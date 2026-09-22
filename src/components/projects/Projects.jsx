import "./Projects.css";
import taskManager from "../../assets/images/task-manager.png";
import budgetTracker from "../../assets/images/budget-tracker.png";
import note from "../../assets/images/note.png";
import weather from "../../assets/images/weather.png";

function Projects() {
  return (
    <div id="projects">
      <span>Projects</span>
      <div className="projects-content">
        <h2>Things I've built</h2>
        <div className="buttons">
          <button className="all-btn">All</button>
          <button className="frontend-btn">Frontend</button>
          <button className="backend-btn">Backend</button>
        </div>
        <div className="project-cards">
          <div className="project-card">
            <a
              href="https://task-management-system-coral-ten.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={taskManager}
                alt="Task Manager App"
                className="project-img"
              />
            </a>
            <h3 className="project-title">Task Manager app</h3>
            <p className="description">Kanban-style tool with drag and drop.</p>
            <ul className="tech-stacks">
              <li className="tech-stack">HTML</li>
              <li className="tech-stack">CSS</li>
              <li className="tech-stack">JavaScript</li>
            </ul>
          </div>
          <div className="project-card">
            <a
              href="https://note-app-nine-fawn.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={note} alt="Note App" className="project-img" />
            </a>
            <h3 className="project-title">Note app</h3>
            <p className="description">Kanban-style tool with drag and drop.</p>
            <ul className="tech-stacks">
              <li className="tech-stack">HTML</li>
              <li className="tech-stack">CSS</li>
              <li className="tech-stack">JavaScript</li>
            </ul>
          </div>
          <div className="project-card">
            <a
              href="https://budget-tracker-tan-mu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={budgetTracker}
                alt="Budget Tracker App"
                className="project-img"
              />
            </a>
            <h3 className="project-title">Budget tracker app</h3>
            <p className="description">Kanban-style tool with drag and drop.</p>
            <ul className="tech-stacks">
              <li className="tech-stack">HTML</li>
              <li className="tech-stack">CSS</li>
              <li className="tech-stack">JavaScript</li>
            </ul>
          </div>
          <div className="project-card">
            <a
              href="https://weather-app-five-orcin-38.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={weather} alt="Weather App" className="project-img" />
            </a>
            <h3 className="project-title">Weather app</h3>
            <p className="description">Kanban-style tool with drag and drop.</p>
            <ul className="tech-stacks">
              <li className="tech-stack">HTML</li>
              <li className="tech-stack">CSS</li>
              <li className="tech-stack">JavaScript</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
