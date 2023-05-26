const initialState = {
    score: 0,
    currentQuestion: 0,
    quizCompleted: false
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT_SCORE':
        return { ...state, score: state.score + 1 };
      case 'SET_CURRENT_QUESTION':
        return { ...state, currentQuestion: action.payload };
      case 'COMPLETE_QUIZ':
        return { ...state, quizCompleted: true };
      default:
        return state;
    }
  };
  
  export default reducer;