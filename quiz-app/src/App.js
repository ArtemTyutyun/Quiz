import React, { useState } from 'react';
import Quiz from './Quiz';
import { quizData } from './quizData';
import './App.css';

const App = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="app">
      {!quizCompleted && <h1>My Quiz</h1>}
      {quizCompleted ? (
        <div className="game-over">
          <h2 className='over'>Game Over</h2>
          <p className='score'>Your score is: {score}/{quizData.length}</p>
        </div>
      ) : (
        <>
          <Quiz
            question={quizData[currentQuestion].question}
            options={quizData[currentQuestion].options}
            handleAnswer={handleAnswer}
          />
          <p className="question-counter">
            Question {currentQuestion + 1} of {quizData.length}
          </p>
        </>
      )}
    </div>
  );
};

export default App;