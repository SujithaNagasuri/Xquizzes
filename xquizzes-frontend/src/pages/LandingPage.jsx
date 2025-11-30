import React from "react";
import "./LandingPage.css";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import heroImg from "../assets/hero_sec.jpeg";

const LandingPage = () => {
  return (
    <div className="landing-container">
        <Navbar/>
      
      {/* <nav className="navbar">
        <div className="logo">Xquizzes</div>
        <div className="nav-actions">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav> */}

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">
            Adaptive AI Test Series <br /> for Entrance Exams
          </h1>

          <p className="hero-subtitle">
            Generate personalized tests and get AI-driven insights to excel in
            GATE, JEE, NEET.
          </p>

          <button className="get-started-btn" href="/login">Get Started</button>
        </div>

        <div className="hero-right">
          <img
            src={heroImg}
            alt="AI Illustration"
            className="hero-img"
          />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">🧠</div>
          <h3>AI-Generated Tests</h3>
          <p>
            Generate adaptive tests tailored to your strengths and weaknesses.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Performance Analytics</h3>
          <p>
            Get detailed insights on your progress and areas for improvement.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🎯</div>
          <h3>Personalized Recommendations</h3>
          <p>
            Receive customized study plans and resources based on your
            performance.
          </p>
        </div>
      </section>

      {/* WHY XQUIZZES SECTION */}


{/* HOW IT WORKS SECTION */}
<section className="how-section">
  <h2>How It Works</h2>

  <div className="how-grid">

    <div className="how-card">
      <div className="how-icon">📝</div>
      <h3>Select Your Exam</h3>
      <p>Choose from GATE, JEE, NEET, or custom tests.</p>
    </div>

    <div className="how-card">
      <div className="how-icon">📋</div>
      <h3>Take the Test</h3>
      <p>AI-generated topic-based tests from verified question banks.</p>
    </div>

    <div className="how-card">
      <div className="how-icon">📈</div>
      <h3>Get Insights</h3>
      <p>Instantly view detailed reports, strengths, and recommendations.</p>
    </div>

  </div>
</section>



{/* ANALYTICS SECTION */}
<section className="analytics-section">
  <div className="analytics-left">
    <h2>Analytics</h2>
    <p className="analytics-sub">
      Understand your progress with real-time reports.
    </p>

    <p className="analytics-desc">
      Track your performance, identify weak areas, and improve faster with 
      AI-backed insights and clear visual progress charts.
    </p>
  </div>

  <div className="analytics-right">
    <img
      src="your-analytics-image.png"
      alt="Analytics Graph"
      className="analytics-img"
    />
  </div>
</section>
    {/* Footer Section*/}
    <Footer />
    </div>
  );
};

export default LandingPage;
