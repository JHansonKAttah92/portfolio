import "./Hero.css";

function Hero() {
  return (
    <div id="hero">
      <div className="hero-content">
        <span>Software Engineer</span>
        <h1>Hi, I'm Joshua — I build Clean, reliable web apps.</h1>
        <p>
          Full-stack developer focused on React, Node and thoughtful UI.
          Currently open to new opportunities.
        </p>
        <div className="hero-buttons">
          <button>View work</button>
          <button>Contact me</button>
        </div>
        <div className="selected-projects">
          <span>Selected Projects</span>
          <div className="project-cards">
            <div className="project-card">
              <img src="https://via.placeholder.com/150" alt="Project 1" />
              <div className="project-info">
                <h2>Project 1</h2>
                <p>A brief description of Project 1.</p>
                <span className="project-stack">React</span>
                <span className="project-stack">Node</span>
              </div>
            </div>
            <div className="project-card">
              <img src="https://via.placeholder.com/150" alt="Project 2" />
              <div className="project-info">
                <h2>Project 2</h2>
                <p>A brief description of Project 2.</p>
                <span className="project-stack">React</span>
                <span className="project-stack">Express</span>
              </div>
            </div>
            <div className="project-card">
              <img src="https://via.placeholder.com/150" alt="Project 3" />
              <div className="project-info">
                <h2>Project 3</h2>
                <p>A brief description of Project 3.</p>
                <span className="project-stack">Vue</span>
                <span className="project-stack">Node</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
