import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="nav-logo">
          X<span>Quizzes</span>
        </div>

        {/* Desktop Menu */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/quizzes">Quizzes</a></li>
          <li><a href="/create">Create Quiz</a></li>
          <li><a href="/results">Results</a></li>
          <li><a className="nav-btn" href="/login">Login</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
