import actionTypes from "../actions/trivial/actionTypes";
import questionsReducer from "./questionsReducer";

describe("Given questionsReducer", () => {
  describe("When it's passed an array with 2 questions and the removeQuestion action", () => {
    test("Then it should return an array without the removed question", () => {
      const questions = [{ id: 3456456456 }, { id: 2 }];
      const expectedQuestions = [{ id: 3456456456 }];
      const action = {
        type: actionTypes.removeQuestion,
        id: 2,
      };

      const newQuestions = questionsReducer(questions, action);

      expect(newQuestions).toEqual(expectedQuestions);
    });
  });

  describe("When it's passed an array with 2 questions and the addQuestion action", () => {
    test("Then it should return an array with the new question", () => {
      const questions = [{ id: 3456456456 }, { id: 2 }];
      const expectedQuestions = [
        { id: 3456456456 },
        { id: 2 },
        { id: 3453456 },
      ];
      const questionToAdd = { id: 3453456 };
      const action = {
        type: actionTypes.addQuestion,
        question: questionToAdd,
      };

      const newQuestions = questionsReducer(questions, action);

      expect(newQuestions).toEqual(expectedQuestions);
    });
  });

  describe("When it's passed an array with 2 questions and the emptyQuestions action", () => {
    test("Then it should return an empty array", () => {
      const questions = [{ id: 3456456456 }, { id: 2 }];
      const expectedQuestions = [];

      const action = {
        type: actionTypes.emptyQuestions,
      };

      const newQuestions = questionsReducer(questions, action);

      expect(newQuestions).toEqual(expectedQuestions);
    });
  });
});
