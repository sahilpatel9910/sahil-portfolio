import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>Institute of Plasma Research (IPR)</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Worked on both web and mobile at one of India's leading research institutions. Built responsive, dynamic web interfaces in React.js and developed a cross-platform Android application using Flutter, Node.js, and MySQL. Integrated advanced features including Speech-to-Text conversion and Google Maps.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Academic Project Developer</h4>
                <h5>Vision Verse Interactive Pty Ltd</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built and shipped a production-grade multi-vendor retail platform for 200+ artists — handling everything from architecture to deployment using Next.js, TypeScript, PostgreSQL, and AWS. Designed a POS system, RESTful APIs, and automated billing workflows via AWS scheduled cron jobs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
