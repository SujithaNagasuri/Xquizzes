import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

// ✅ Import your questions file
import questions from "../data/questions";

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const username = user?.name || "User";

  const handleStart = (subject) => {
    navigate(`/test/${subject}`);
  };

  // Subjects list (no hardcoded values)
  const subjects = [
    { id: "cn", title: "Computer Networks" },
    { id: "os", title: "Operating Systems" },
    { id: "dbms", title: "DBMS" },
    { id: "algo", title: "Algorithms" },
    { id: "dm", title: "Discrete Mathematics" }
  ];

  return (
    <div className="dashboard-container">

      {/* Welcome Section */}
      <section className="dash-row welcome-row">
        <h2>Welcome, {username} 👋</h2>
        <p>Your personalized analytics dashboard for tracking learning progress.</p>
      </section>

      {/* Stats */}
      <section className="dash-row stats-row">
        <div className="stat-card">
          <h3>Tests Attempted</h3>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "70%" }}></div>
          </div>
          <p>14 Completed</p>
        </div>

        <div className="stat-card">
          <h3>Accuracy</h3>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "65%" }}></div>
          </div>
          <p>65% Overall Accuracy</p>
        </div>

        <div className="stat-card">
          <h3>Consistency</h3>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "80%" }}></div>
          </div>
          <p>Great Improvement</p>
        </div>
      </section>

      {/* Subjects */}
      <section className="dash-row subjects-row">
        <h2 className="sub-heading">Start Your GATE CSE Practice Tests</h2>

        <div className="subjects-grid">
          {subjects.map((s, index) => {
            const count = questions[s.id]?.length || 0;          // ✔ number of questions
            const time = `${count} mins`;                         // ✔ 1 minute per question

            return (
              <div key={index} className="subject-card">
                <h3>{s.title}</h3>
                <p>{count} Questions • {time}</p>
                <button onClick={() => handleStart(s.id)}>Start Exam</button>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}

export default Dashboard;
