import actionTypes from "../actions/trivial/actionTypes";

const allQuestionsReducer = (currentAllQuestions, action) => {
  let newAllQuestions;

  switch (action.type) {
    case actionTypes.loadQuestions:
      newAllQuestions = [...action.questions];
      break;

    default:
      newAllQuestions = [...currentAllQuestions];
      break;
  }

  return newAllQuestions;
};

export default allQuestionsReducer;
