import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          <strong>Jack of all trades. Master of shipping things that actually work.</strong>
          <br /><br />
          Hey, I'm Sahil — a Master's in Information Technology graduate from RMIT, full-stack developer, and someone who's spent as much time managing real-world operations as writing code.
          I bring a project manager's eye and a software designer's intent to everything I build — whether that's architecting cloud-native systems on AWS, designing databases that scale, or turning raw data into insights that actually mean something.
          <br /><br />
          From building predictive ML models and designing relational schemas to shipping full-stack applications end-to-end — I work across the stack and across disciplines.
          Former hospitality pro turned tech builder. I know how to work under pressure, lead without a title, and deliver. Let's build something worth using.
        </p>
      </div>
    </div>
  );
};

export default About;
