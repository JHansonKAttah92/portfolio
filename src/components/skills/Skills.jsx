import "./Skills.css";
import { CodeXml } from "lucide-react";
import { LayoutGrid } from "lucide-react";
import { Wrench } from "lucide-react";

function Skills() {
  return (
    <div id="skills">
      <span>Skills</span>
      <div className="skills-content">
        <div className="skill-cards">
          <div className="skill-card">
            <h2>
              <CodeXml />
              Languages
            </h2>
            <ul>
              <li className="skill-item">JavaScript</li>
            </ul>
          </div>
          <div className="skill-card">
            <h2>
              <LayoutGrid />
              Frameworks
            </h2>
            <ul>
              <li className="skill-item">React</li>
              <li className="skill-item">Node.js</li>
            </ul>
          </div>
          <div className="skill-card">
            <h2>
              <Wrench />
              Tools
            </h2>
            <ul>
              <li className="skill-item">Git</li>
              <li className="skill-item">Github</li>
              <li className="skill-item">Vite</li>
              <li className="skill-item">npm</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
