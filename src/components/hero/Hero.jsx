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
      </div>
    </div>
  );
}

export default Hero;
