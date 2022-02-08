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

export const addQuestionAction = (id) => ({
  type: actionTypes.addQuestion,
  id: id,
});

export const removeQuestions = (id) => ({
  type: actionTypes.removeQuestion,
  id: id,
});
