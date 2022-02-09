import actionTypes from "../actions/trivial/actionTypes";

const allQuestionsReducer = (currentAllQuestions, action) => {
  let newAllQuestions;

  switch (action.type) {
    case actionTypes.loadQuestions:
      newAllQuestions = action.questions.map((question, index) => ({
        ...question,
        id: index,
        selected: false,
      }));
      break;

    case actionTypes.toggleSelectQuestion:
      newAllQuestions = [...currentAllQuestions];
      const questionToEdit = newAllQuestions.find(({ id }) => action.id === id);
      questionToEdit.selected = !questionToEdit.selected;
      break;
    default:
      newAllQuestions = [...currentAllQuestions];
      break;
  }

  return newAllQuestions;
};

export default allQuestionsReducer;
