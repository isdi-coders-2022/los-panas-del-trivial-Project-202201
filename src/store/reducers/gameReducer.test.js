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
  describe("When it receives a 'add-game' action, to add a new game with id 4", () => {
    test("Then it should return an array of games including the new game with id 4", () => {
      const currentGames = [
        {
          id: 3,
          name: "Janis",
          creator: "Joplin",
          difficulty: "Easy",
          questions: [],
        },
      ];

      const action = {
        type: actionTypes.addGame,
        id: 4,
      };

      action.game = {
        id: 4,
        name: "Star Wars",
        creator: "Leia",
        difficulty: "Easy",
        questions: [],
      };

      const expectedNewGames = [
        {
          id: 3,
          name: "Janis",
          creator: "Joplin",
          difficulty: "Easy",
          questions: [],
        },
        {
          id: 4,
          name: "Star Wars",
          creator: "Leia",
          difficulty: "Easy",
          questions: [],
        },
      ];

      const newGameArray = gameReducer(currentGames, action);

      expect(newGameArray).toEqual(expectedNewGames);
    });
  });

  describe("When it receives a 'modify-game-names' action, to add a new game with id 4", () => {
    test("Then it should return an array of games including the new game with id 4", () => {
      const currentGames = [
        {
          id: 3,
          name: "Janis",
          creator: "Joplin",
          difficulty: "Easy",
          questions: [],
        },
      ];

      const action = {
        type: actionTypes.modifyGameNames,
        id: 3,
      };

      action.gameNames = {
        name: "Ringo",
        creator: "Star",
      };

      const expectedNewGames = [
        {
          id: 3,
          name: "Ringo",
          creator: "Star",
          difficulty: "Easy",
          questions: [],
        },
      ];

      const newGameArray = gameReducer(currentGames, action);

      expect(newGameArray).toEqual(expectedNewGames);
    });
  });
});
