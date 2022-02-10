import actionTypes from "../actions/trivial/actionTypes";

const gameReducer = (currentGames, action) => {
  let newGames;

  switch (action.type) {
    case actionTypes.addGame:
      newGames = [...currentGames, action.game];
      break;
    case actionTypes.modifyGameNames:
      newGames = [...currentGames];
      const gameToEdit = newGames.find(({ id }) => action.id === id);
      gameToEdit.name = action.gameNames.name;
      gameToEdit.creator = action.gameNames.creator;
      break;
    case actionTypes.removeGame:
      newGames = [...currentGames];
      newGames.filter((game) => action.id !== game.id);
      break;
    case actionTypes.loadGames:
      newGames = [...action.gamesList];
      break;

    default:
      newGames = [...currentGames];
  }
  return newGames;
};

export default gameReducer;
