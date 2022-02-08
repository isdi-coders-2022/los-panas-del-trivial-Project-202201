import actionTypes from "./actionTypes";

export const addGameAction = () => ({
  type: actionTypes.addGame,
});

export const modifyGameNamesAction = () => ({
  type: actionTypes.modifyGameNames,
});

export const removeGameAction = () => ({
  type: actionTypes.removeGame,
});

export const addQuestionAction = () => ({
  type: actionTypes.addQuestion,
});

export const removeQuestions = () => ({
  type: actionTypes.removeQuestion,
});
