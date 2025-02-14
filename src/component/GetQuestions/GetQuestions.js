"use client";
import React, { useState, useEffect } from 'react';
import { serverCall } from "@/include/reuseble/serverCall";

export const Get_Question = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const res = await serverCall.sendget("/api/que/get");
      if (res.data) {
        const formattedQuestions = res.data.map(q => ({
          _id: q._id,
          question: q.que,
          options: [q.opt1, q.opt2, q.opt3, q.opt4],
          answer: q.ans
        }));
        setQuestions(formattedQuestions);
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const handleChange = (qId, option) => {
    setAnswers({ ...answers, [qId]: option });
  };

  const handleSubmit = async () => {
    try {
      const res = await serverCall.sendpost("/api/que/submit", { answers });
      setScore(res.data.score);
      console.log("score : ",res.data.score)
      alert(`Your score: ${res.data.score}/${questions.length}`);
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };

  return (
    <div className="container mt-3">
      {/* <h2>MCQ Test</h2> */}
      {questions.map((q, index) => (
        <div key={q._id} className="mb-3 mt-1">
          <h5>{index + 1}. {q.question}</h5>
          {q.options.map((option, i) => (
            <div key={i}>
              <input 
                type="radio" 
                name={`question_${q._id}`} 
                value={option} 
                checked={answers[q._id] === option} 
                onChange={() => handleChange(q._id, option)}
              /> {option}
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit} className="btn btn-primary mt-3 mb-5">Submit Test</button>
      {score !== null && <h3 className="mt-0 mb-5">Your Score: {score}/{questions.length}</h3>}
    </div>
  );
};
