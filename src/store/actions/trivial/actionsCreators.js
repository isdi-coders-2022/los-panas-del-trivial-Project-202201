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

export const loadGamesAction = (gamesList) => ({
  type: actionTypes.loadGames,
  gamesList: gamesList,
});

export const addQuestionAction = (question) => ({
  type: actionTypes.addQuestion,
  question: question,
});

export const removeQuestionsAction = (id) => ({
  type: actionTypes.removeQuestion,
  id: id,
});

export const loadQuestionsAction = (questions) => ({
  type: actionTypes.loadQuestions,
  questions: questions,
});

export const toggeleSelectQuestionsAction = (id) => ({
  type: actionTypes.toggleSelectQuestion,
  id: id,
});
