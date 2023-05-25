import './style.css';
import React from 'react';

const Quiz = ({ question, options, handleAnswer }) => {
  return (
    <div className="quiz">
      <h2 className='ques'>{question}</h2>
      {options.map((option, index) => (
        <div key={index} className="quiz-option">
          <p className="option-text">{option.answer}</p>
          <button
            className="select-button"
            onClick={() => handleAnswer(option.isCorrect)}
          >
            <div className='select-div'>Select</div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Quiz;