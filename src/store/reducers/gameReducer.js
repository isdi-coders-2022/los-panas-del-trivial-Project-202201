import actionTypes from "../actions/trivial/actionTypes";

const gameReducer = (currentGames, action) => {
  let newGames;

  switch (action.type) {
    case actionTypes.addGame:
      newGames = [...currentGames, action.game];
      break;
    case actionTypes.modifyGameNames:
      newGames = currentGames.map((game) => {
        if (game.id === action.id) {
          return {
            ...game,
            name: action.gameNames.name,
            creator: action.gameNames.creator,
          };
        }
        return { ...game };
      });
      break;
    case actionTypes.removeGame:
      newGames = currentGames.filter((game) => action.id !== game.id);
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
