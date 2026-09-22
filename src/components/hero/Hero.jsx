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
        <a href="#projects">
          <button>View work</button>
        </a>
        <a href="#contact">
          <button>Contact me</button>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
