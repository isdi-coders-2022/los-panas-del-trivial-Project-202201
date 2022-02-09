import actionTypes from "./actionTypes";

export const addGameAction = (game) => ({
  type: actionTypes.addGame,
  game: game,
});

export const modifyGameNamesAction = (gameNames, id) => ({
  type: actionTypes.modifyGameNames,
  gameNames: gameNames,
  id: id,
});

export const removeGameAction = (id) => ({
  type: actionTypes.removeGame,
  id: id,
});

export const addQuestionAction = (question) => ({
  type: actionTypes.addQuestion,
  question: question,
});

export const removeQuestions = (id) => ({
  type: actionTypes.removeQuestion,
  id: id,
});

export const loadQuestions = (questions) => ({
  type: actionTypes.loadQuestions,
  questions: questions,
});
