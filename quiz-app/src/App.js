import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Quiz from './Quiz';
import { quizData } from './quizData';
import './App.css';

const App = () => {
  const score = useSelector(state => state.score);
  const currentQuestion = useSelector(state => state.currentQuestion);
  const quizCompleted = useSelector(state => state.quizCompleted);
  const dispatch = useDispatch();

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      dispatch({ type: 'INCREMENT_SCORE' });
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      dispatch({ type: 'SET_CURRENT_QUESTION', payload: nextQuestion });
    } else {
      dispatch({ type: 'COMPLETE_QUIZ' });
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