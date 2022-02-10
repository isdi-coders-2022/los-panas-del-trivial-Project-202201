import allQuestionsReducer from "./allQuestionsReducer";

describe("Given a allQuestionsReducer reducer", () => {
  describe("When it receives an array with two questions and loadQuestoins action", () => {
    test("Then it should return", () => {
      const currentAllQuestions = [];

      const action = {
        type: "load-all-questions",
        questions: [
          {
            question: "text some question",
            type: "",
            selected: false,
            category: "",
          },
          {
            question: "another question",
            type: "",
            selected: false,
            category: "",
          },
        ],
      };

      const expectedQuestions = [
        {
          question: "text some question",
          type: "",
          selected: false,
          id: 0,
          category: "",
        },
        {
          question: "another question",
          type: "",
          selected: false,
          id: 1,
          category: "",
        },
      ];

      const newAllQuestions = allQuestionsReducer(currentAllQuestions, action);

      expect(newAllQuestions).toEqual(expectedQuestions);
    });
  });
  describe("When it receives an array with two unselected questions and an action to selected the first one", () => {
    test("Then it should return an array with one selected question and one unselected question", () => {
      const currentQuestions = [
        {
          question: "text some question",
          type: "",
          selected: false,
          id: 0,
          category: "",
        },
        {
          question: "another question",
          type: "",
          selected: false,
          id: 1,
          category: "",
        },
      ];

      const action = {
        type: "toggle-selected-question",
        id: 0,
      };

      const expectedQuestions = [
        {
          question: "text some question",
          type: "",
          selected: true,
          id: 0,
          category: "",
        },
        {
          question: "another question",
          type: "",
          selected: false,
          id: 1,
          category: "",
        },
      ];

      const newAllQuestions = allQuestionsReducer(currentQuestions, action);

      expect(newAllQuestions).toEqual(expectedQuestions);
    });
  });
});
