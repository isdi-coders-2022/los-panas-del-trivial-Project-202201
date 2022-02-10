import actionTypes from "../actions/trivial/actionTypes";

const questionsReducer = (currentSelectedQuestions, action) => {
  let newSelectedQuestions;

  switch (action.type) {
    case actionTypes.addQuestion:
      newSelectedQuestions = [...currentSelectedQuestions];
      newSelectedQuestions.push(action.question);
      break;

    case actionTypes.removeQuestion:
      newSelectedQuestions = [...currentSelectedQuestions];

      newSelectedQuestions.forEach((question, index) => {
        if (action.id === question.id) {
          newSelectedQuestions.splice(index, 1);
        }
      });
      break;

    case actionTypes.emptyQuestions:
      newSelectedQuestions = [];
      break;

    default:
      newSelectedQuestions = [...currentSelectedQuestions];
      break;
  }

  return newSelectedQuestions;
};

export default questionsReducer;
