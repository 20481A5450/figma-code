import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="Section-1">
        <div className="logo">Logo
          <button className="login">Login</button>
          <button className="signup">Signup</button>
        </div>
      </div>
      <header className="header">
        <nav className="nav">
          <a href="#overview">Overview</a>
          <a href="#curriculum">Curriculum</a>
          <a href="#refund">Refund</a>
          <a href="#testimonials">Testimonials</a>
        </nav>
      </header>
      <main>
        <div className="section-2">
          <div className="div1">
            <section className="initiative">
              <div className="initiative-tag">🎓 An IIT Delhi Alumni Initiative</div>
            </section>
            <section className="hero">
              <h1>
                Become an Expert in the field of <span className="highlight">Data Science with</span> <span className="highlight">6 courses</span>
              </h1>
              <p>A specially crafted Tech Kickstarter, with 5+ extensive online courses.</p>
              <div className="features">
                <div className="feature">🌟 Personal Mentorship</div>
                <div className="feature">🌟 Internship Assistance</div>
                <div className="feature">🌟 Industry Certified Courses</div>
              </div>
              <div className="cta-buttons">
                <a href="#enroll" className="enroll">Enroll Now</a>
                <a href="#know-more" className="know-more">Know More</a>
              </div>
              </section>
          </div>
          <div className="2nd_half"></div>
        </div>
        <section className="stats">
          <div className="stat">
            <i className="fas fa-book"></i>
            <p>24 Courses</p>
          </div>
          <div className="stat">
            <i className="fas fa-users"></i>
            <p>30k+ Learners</p>
          </div>
          <div className="stat">
            <i className="fas fa-question-circle"></i>
            <p>100k+ Doubts Solved</p>
          </div>
          <div className="stat">
            <i className="fas fa-project-diagram"></i>
            <p>10k+ Student Projects</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
