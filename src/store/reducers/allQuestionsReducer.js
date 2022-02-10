import actionTypes from "../actions/trivial/actionTypes";

const allQuestionsReducer = (currentAllQuestions, action) => {
  let newAllQuestions;

  switch (action.type) {
    case actionTypes.loadQuestions:
      newAllQuestions = action.questions.map((question, index) => ({
        ...question,
        id: index,
        selected: 0,
      }));
      break;

    case actionTypes.toggleSelectQuestion:
      newAllQuestions = currentAllQuestions.map((question) => {
        if (question.id === action.id) {
          return { ...question, selected: !question.selected };
        }
        return { ...question };
      });
      break;

    case actionTypes.emptyQuestions:
      newAllQuestions = [];
      break;

    default:
      newAllQuestions = [...currentAllQuestions];
      break;
  }

  return newAllQuestions;
};

export default allQuestionsReducer;
