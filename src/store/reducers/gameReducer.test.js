import actionTypes from "../actions/trivial/actionTypes";
import gameReducer from "./gameReducer";

describe("Given a gameReducer function", () => {
  describe("When it receives a 'remove-game' action, to remove a game with id 2", () => {
    test("Then it should return an array of games without the game with id 2", () => {
      const currentGames = [
        {
          id: 1,
          name: "test's game",
          creator: "Dan Abramov",
          difficulty: "Easy",
          questions: [],
        },
        {
          id: 2,
          name: "Queen Game",
          creator: "Freddie",
          difficulty: "Hard",
          questions: [],
        },
        {
          id: 3,
          name: "Janis",
          creator: "Joplin",
          difficulty: "Easy",
          questions: [],
        },
      ];

      const action = {
        type: actionTypes.removeGame,
        id: 2,
      };

      const expectedNewGames = [
        {
          id: 1,
          name: "test's game",
          creator: "Dan Abramov",
          difficulty: "Easy",
          questions: [],
        },
        {
          id: 3,
          name: "Janis",
          creator: "Joplin",
          difficulty: "Easy",
          questions: [],
        },
      ];

      const newGameArray = gameReducer(currentGames, action);

      expect(newGameArray).toEqual(expectedNewGames);
    });
  });
});
