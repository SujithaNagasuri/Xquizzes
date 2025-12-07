// src/pages/TestPage.jsx
import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import questionsData from "../data/questions";
import "./TestPage.css";

export default function TestPage() {
  const { subject } = useParams();
  const navigate = useNavigate();

  const questions = questionsData[subject] || [];
  const total = questions.length;

  const DEFAULT_TIME = total * 60;

  const [timeLeft, setTimeLeft] = useState(DEFAULT_TIME);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(Array(total).fill(null));
  const [flagged, setFlagged] = useState(Array(total).fill(false));

  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const timerRef = useRef(null);

  // Start timer
  useEffect(() => {
    setSelected(Array(total).fill(null));
    setFlagged(Array(total).fill(false));
    setTimeLeft(DEFAULT_TIME);

    timerRef.current = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [subject, total]);

  useEffect(() => {
    if (timeLeft <= 0 && !submitted) handleSubmit();
  }, [timeLeft]);

  // Select an option
  const handleSelect = (oi) => {
    if (submitted) return;
    const copy = [...selected];
    copy[currentQ] = oi;
    setSelected(copy);
  };

  const toggleFlag = () => {
    const copy = [...flagged];
    copy[currentQ] = !copy[currentQ];
    setFlagged(copy);
  };

  // Submit test
  const handleSubmit = () => {
    clearInterval(timerRef.current);

    let sc = 0;
    questions.forEach((q, i) => {
      if (selected[i] === q.answer) sc++;
    });

    setScore(sc);
    setSubmitted(true);
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60).toString().padStart(2, "0");
    const s = Math.floor(secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="test-wrapper">

      {/* TOP HEADER */}
      <div className="top-header">
        <h2>{subject.toUpperCase()} Test</h2>
        <div className="timer-box">{formatTime(timeLeft)}</div>
      </div>

      {/* MAIN AREA */}
      <div className="test-container">

        {/* LEFT SIDE */}
        <div className="test-left">

          {!submitted ? (
            <div className="question-card">
              <h3 className="question-text">
                Q{currentQ + 1}. {questions[currentQ].question}
              </h3>

              <div className="options-list">
                {questions[currentQ].options.map((opt, oi) => (
                  <label
                    key={oi}
                    className={`option-item ${
                      selected[currentQ] === oi ? "selected-option" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="option"
                      checked={selected[currentQ] === oi}
                      onChange={() => handleSelect(oi)}
                    />
                    {opt}
                  </label>
                ))}
              </div>

              <button className="flag-btn" onClick={toggleFlag}>
                {flagged[currentQ] ? "Unflag this question" : "Flag this question"}
              </button>
            </div>
          ) : (
            <div className="result-box">
              <h2 className="result-title">🎉 Test Report</h2>

              <div className="result-card">
                <h3>Score Summary</h3>
                <p><strong>Total Questions:</strong> {total}</p>
                <p><strong>Correct Answers:</strong> {score}</p>
                <p><strong>Wrong Answers:</strong> {total - score}</p>
                <p><strong>Percentage:</strong> {(score / total * 100).toFixed(2)}%</p>
              </div>

              <button
                className="dashboard-btn"
                onClick={() => navigate("/dashboard")}
              >
                Back to Dashboard
              </button>
            </div>
          )}
        </div>

        {/* RIGHT SIDE: QUESTION NAVIGATION */}
        <div className="question-nav">
          <h3>Questions</h3>

          <div className="q-grid">
            {questions.map((_, idx) => (
              <button
                key={idx}
                className={`
                  q-number 
                  ${idx === currentQ ? "current" : ""}
                  ${selected[idx] !== null ? "answered" : ""}
                  ${flagged[idx] ? "flagged" : ""}
                `}
                onClick={() => setCurrentQ(idx)}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* STICKY BOTTOM NAVIGATION */}
      {!submitted && (
        <div className="bottom-nav">
          <button
            disabled={currentQ === 0}
            onClick={() => setCurrentQ((prev) => prev - 1)}
          >
            Previous
          </button>

          <button
            onClick={() =>
              currentQ < total - 1
                ? setCurrentQ((prev) => prev + 1)
                : handleSubmit()
            }
            className={currentQ === total - 1 ? "submit-btn" : ""}
          >
            {currentQ === total - 1 ? "Submit Test" : "Next"}
          </button>
        </div>
      )}

    </div>
  );
}
