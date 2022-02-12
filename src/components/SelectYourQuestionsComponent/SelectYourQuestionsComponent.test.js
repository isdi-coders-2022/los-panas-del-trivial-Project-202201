import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import TrivialContext from "../../store/contexts/TrivialContext";
import SelectYourQuestionsComponent from "./SelectYourQuestionsComponent";

describe("Given a SelectYourQuestionsComponent", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a heading with the text 'Select Your Questions'", () => {
      const expectedText = "Select Your Questions";

      const providerValue = {
        currentAllQuestions: [],
        currentQuestions: [],
        allQuestionsDispatch: () => {},
        questionDispatch: () => {},
      };

      render(
        <BrowserRouter>
          <TrivialContext.Provider value={providerValue}>
            <SelectYourQuestionsComponent />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const foundHeading = screen.queryByRole("heading", { level: 1 });

      expect(foundHeading.textContent).toBe(expectedText);
    });

    test("Then it should render a button with the text 'Save'", () => {
      const expectedText = "Save";
      const providerValue = {
        currentAllQuestions: [],
        currentQuestions: [],
        allQuestionsDispatch: () => {},
        questionDispatch: () => {},
      };

      render(
        <BrowserRouter>
          <TrivialContext.Provider value={providerValue}>
            <SelectYourQuestionsComponent />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const foundHeading = screen.queryByRole("button");

      expect(foundHeading.textContent).toBe(expectedText);
    });

    test("Then it should render a BackArrowComponent", () => {
      const providerValue = {
        currentAllQuestions: [],
        currentQuestions: [],
        allQuestionsDispatch: () => {},
        questionDispatch: () => {},
      };

      render(
        <BrowserRouter>
          <TrivialContext.Provider value={providerValue}>
            <SelectYourQuestionsComponent />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const foundHeading = screen.queryByTestId("arrow");

      expect(foundHeading).toBeInTheDocument();
    });
  });
  describe("When it's instantiated with and array", () => {
    test("Then it should render the text in the card", () => {
      const questions = [
        {
          id: 1,
          category: "Animals",
          type: "boolean",
          difficulty: "easy",
          question:
            "The Axolotl is an amphibian that can spend its whole life in a larval state.",
        },
        {
          id: 2,
          category: "Animals",
          type: "boolean",
          difficulty: "easy",
          question: "A slug&rsquo;s blood is green.",
        },
        {
          id: 3,
          category: "Animals",
          type: "multiple",
          difficulty: "easy",
          question: "What is the scientific name for modern day humans?",
        },
      ];
      const expectedOutput =
        "What is the scientific name for modern day humans?";
      const providerValue = {
        currentAllQuestions: questions,
        currentQuestions: [],
        allQuestionsDispatch: () => {},
        questionDispatch: () => {},
      };

      render(
        <BrowserRouter>
          <TrivialContext.Provider value={providerValue}>
            <SelectYourQuestionsComponent />
          </TrivialContext.Provider>
        </BrowserRouter>
      );
      const findText = screen.queryByText(expectedOutput);

      expect(findText).toBeInTheDocument();
    });
  });

  describe("When the selected is false and it's clicked", () => {
    test("Then it should call the action", () => {
      const questions = [
        {
          id: 1,
          category: "Animals",
          type: "boolean",
          difficulty: "easy",
          question: "question 1",
          selected: false,
        },
        {
          id: 2,
          category: "Animals",
          type: "boolean",
          difficulty: "easy",
          question: "question 2",
          selected: false,
        },
      ];

      const action = jest.fn();

      const providerValue = {
        currentAllQuestions: questions,
        currentQuestions: [],
        allQuestionsDispatch: action,
        questionDispatch: action,
      };

      render(
        <BrowserRouter>
          <TrivialContext.Provider value={providerValue}>
            <SelectYourQuestionsComponent />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const findQuestion = screen.getAllByRole("listitem");

      userEvent.click(findQuestion[1]);

      expect(action).toBeCalled();
    });
  });

  describe("When the selected is true and it's clicked", () => {
    test("Then it should call the action", () => {
      const questions = [
        {
          id: 1,
          category: "Animals",
          type: "boolean",
          difficulty: "easy",
          question: "question 1",
          selected: true,
        },
        {
          id: 2,
          category: "Animals",
          type: "boolean",
          difficulty: "easy",
          question: "question 2",
          selected: true,
        },
      ];

      const action = jest.fn();

      const providerValue = {
        currentAllQuestions: questions,
        currentQuestions: [],
        allQuestionsDispatch: action,
        questionDispatch: action,
      };

      render(
        <BrowserRouter>
          <TrivialContext.Provider value={providerValue}>
            <SelectYourQuestionsComponent />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const findQuestion = screen.getAllByRole("listitem");

      userEvent.click(findQuestion[1]);

      expect(action).toBeCalled();
    });
  });
});
