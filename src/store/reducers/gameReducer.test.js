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

  describe("When it receives a 'modify-game-names' action, to modify the game with id 4", () => {
    test("Then it should return an array of games with the game with id 4 changed", () => {
      const currentGames = [
        {
          id: 3,
          name: "Janis",
          creator: "Joplin",
          difficulty: "Easy",
          questions: [],
        },
        {
          id: 4,
          name: "a",
          creator: "a",
          difficulty: "Easy",
          questions: [],
        },
      ];

      const gameNames = {
        name: "newGameName",
        creator: "newCreator",
      };

      const action = {
        type: actionTypes.modifyGameNames,
        id: 4,
        gameNames,
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
          name: "newGameName",
          creator: "newCreator",
          difficulty: "Easy",
          questions: [],
        },
      ];

      const newGameArray = gameReducer(currentGames, action);

      expect(newGameArray).toEqual(expectedNewGames);
    });
  });

  describe("When it's passed an array with 2 games and an invalid action", () => {
    test("Then it should return an the same inputed array", () => {
      const currentGames = [
        {
          id: 3,
          name: "Janis",
          creator: "Joplin",
          difficulty: "Easy",
          questions: [],
        },
        {
          id: 54675756,
          name: "Janis",
          creator: "Joplin",
          difficulty: "Easy",
          questions: [],
        },
      ];

      const action = {
        type: "asdfdfhgfdhgfh",
      };

      const newGames = gameReducer(currentGames, action);

      expect(newGames).toEqual(currentGames);
    });
  });
});
