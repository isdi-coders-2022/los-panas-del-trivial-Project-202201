import { addGameAction, modifyGameNamesAction } from "./actionsCreators";

describe("Given a addGameAction function", () => {
  describe("When it receives an object game", () => {
    test("Then it should return an action with type 'add-game' and game = game", () => {
      const game = {
        id: 1,
        name: "test's game",
        creator: "Dan Abramov",
        difficulty: "Easy",
        questions: [],
      };
      const expectedAction = {
        type: "add-game",
        game: game,
      };

      const action = addGameAction(game);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a modifyGameNamesAction function", () => {
  describe("When it receives an object gameNames", () => {
    test("Then it should return an action with type 'modify-game-names' and gameNames = gameNames", () => {
      const gameNames = { id: 1, name: "test's game", creator: "Dan Abramov" };
      const expectedAction = {
        type: "modify-game-names",
        gameNames: gameNames,
      };

      const action = modifyGameNamesAction(gameNames);

      expect(action).toEqual(expectedAction);
    });
  });
});
