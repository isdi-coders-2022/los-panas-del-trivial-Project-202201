import {
  addGameAction,
  modifyGameNamesAction,
  removeGameAction,
  addQuestionAction,
  removeQuestionsAction,
  loadQuestionsAction,
  emptyQuestionsAction,
} from "./actionsCreators";

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

describe("Given a removeGameAction function", () => {
  describe("When it receives an id = 33", () => {
    test("Then it should return an action with type 'remove-game' and id = id", () => {
      const id = 33;
      const expectedAction = {
        type: "remove-game",
        id: id,
      };

      const action = removeGameAction(id);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a addQuestionAction function", () => {
  describe("When it receives an id = 43", () => {
    test("Then it should return an action with type 'radd-question' and id = id", () => {
      const question = {};
      const expectedAction = {
        type: "add-question",
        question: question,
      };

      const action = addQuestionAction(question);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a removeQuestions function", () => {
  describe("When it receives an id = 3", () => {
    test("Then it should return an action with type 'remove-question' and id = id", () => {
      const id = 3;
      const expectedAction = {
        type: "remove-question",
        id: id,
      };

      const action = removeQuestionsAction(id);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given loadQuestionsAction function", () => {
  describe("When it receives an array of questions", () => {
    test("Then it should return an action with type 'load-all-questions' with the question array", () => {
      const questions = ["hola", "hi"];
      const expectedAction = {
        type: "load-all-questions",
        questions: questions,
      };

      const action = loadQuestionsAction(questions);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given emptyQuestionsAction function", () => {
  describe("When it is called", () => {
    test("Then it should return an action with type 'empty-questions'", () => {
      const expectedAction = {
        type: "empty-questions",
      };

      const action = emptyQuestionsAction();

      expect(action).toEqual(expectedAction);
    });
  });
});
