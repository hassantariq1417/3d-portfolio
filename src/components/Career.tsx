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
                <h4>Freelance Developer</h4>
                <h5>Remote — International Clients</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Working with international clients on web projects — building
              landing pages, dashboards, and full-stack applications using
              React, Next.js, Node.js, and modern tooling.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Web Dev</h4>
                <h5>Web Development & Computer Sciences</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed a diploma in web development and computer sciences,
              covering HTML, CSS, JavaScript, React, databases, and
              full-stack development fundamentals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BS Mass Communication</h4>
                <h5>University of Lahore</h5>
              </div>
              <h3>2019-2023</h3>
            </div>
            <p>
              Bachelor's degree in Mass Communication — developed strong
              skills in content strategy, visual storytelling, and digital
              media that now inform my approach to web design and UX.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
