import questionReducer from "./questionsReducer";

describe("Given questionReducer", () => {
  describe("When it's padded an array with 2 questions and the removeQuestion action", () => {
    test("Then it should return an array with one question", () => {
      const questions = [{ id: 3456456456 }, { id: 2 }];
      const expectedQuestions = [{ id: 3456456456 }];
      const action = {
        type: "remove-question",
        id: 2,
      };

      const newQuestions = questionReducer(questions, action);

      expect(newQuestions).toEqual(expectedQuestions);
    });
  });
});
