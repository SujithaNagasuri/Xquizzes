import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>XQuizzes</h3>
          <p>
            Practice endlessly. Learn faster.  
            XQuizzes helps students and professionals take high-quality quizzes and improve their skills.
          </p>
        </div>

        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/quizzes">Quizzes</a></li>
            <li><a href="/create">Create Quiz</a></li>
            <li><a href="/results">Results</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="/help">Help Center</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/report">Report an Issue</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} XQuizzes. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
