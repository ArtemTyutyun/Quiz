import './style.css';
import React from 'react';

const QuestionCounter = ({ currentQuestion, totalQuestions }) => {
  return (
    <p className="question-counter">Question {currentQuestion} of {totalQuestions}</p>
  );
};

export default QuestionCounter;