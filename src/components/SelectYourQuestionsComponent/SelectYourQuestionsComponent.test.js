import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import TrivialContext from "../../store/contexts/TrivialContext";
import SelectYourQuestionsComponent from "./SelectYourQuestionsComponent";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

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
            <SelectYourQuestionsComponent onSave={() => {}} />
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
            <SelectYourQuestionsComponent onSave={() => {}} />
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
            <SelectYourQuestionsComponent onSave={() => {}} />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const foundHeading = screen.queryByTestId("arrow");

      expect(foundHeading).toBeInTheDocument();
    });
  });
  describe("When it's instantiated passing questions in the currentAllQuestions array", () => {
    test("Then it should render the questions", () => {
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
      const expectedTextToFind =
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
            <SelectYourQuestionsComponent onSave={() => {}} />
          </TrivialContext.Provider>
        </BrowserRouter>
      );
      const foundElement = screen.queryByText(expectedTextToFind);

      expect(foundElement).toBeInTheDocument();
    });
  });

  describe("When the BackArrow is clicked", () => {
    test("Then it should call navigate with '/home' and call the dispatchers", () => {
      const allQuestionsDispatch = jest.fn();
      const questionDispatch = jest.fn();
      const expectedPath = "/home";
      const providerValue = {
        currentAllQuestions: [],
        currentQuestions: [],
        allQuestionsDispatch,
        questionDispatch,
      };

      render(
        <BrowserRouter>
          <TrivialContext.Provider value={providerValue}>
            <SelectYourQuestionsComponent onSave={() => {}} />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const findArrow = screen.queryByTestId("arrow");
      userEvent.click(findArrow);

      expect(allQuestionsDispatch).toHaveBeenCalledTimes(1);
      expect(questionDispatch).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith(expectedPath);
    });
  });

  describe("When a question is clicked", () => {
    test("Then it should call the allQuestions and questions dispatchers", () => {
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

      const allQuestionsDispatch = jest.fn();
      const questionDispatch = jest.fn();

      const providerValue = {
        currentAllQuestions: questions,
        currentQuestions: [],
        allQuestionsDispatch,
        questionDispatch,
      };

      render(
        <BrowserRouter>
          <TrivialContext.Provider value={providerValue}>
            <SelectYourQuestionsComponent onSave={() => {}} />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const findQuestion = screen.getAllByRole("listitem");

      userEvent.click(findQuestion[1]);

      expect(allQuestionsDispatch).toHaveBeenCalledTimes(1);
      expect(questionDispatch).toHaveBeenCalledTimes(1);
    });
  });

  describe("When a category filter is applied", () => {
    test("Then it should not render the not matching questions", () => {
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
          category: "Sports",
          type: "boolean",
          difficulty: "easy",
          question: "question 2",
          selected: true,
        },
      ];

      const providerValue = {
        currentAllQuestions: questions,
        currentQuestions: [],
        allQuestionsDispatch: () => {},
        questionDispatch: () => {},
      };

      render(
        <BrowserRouter>
          <TrivialContext.Provider value={providerValue}>
            <SelectYourQuestionsComponent onSave={() => {}} />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const filters = screen.getAllByRole("combobox");
      const sportsCategory = screen.getByRole("option", {
        name: "Sports",
      });

      userEvent.selectOptions(filters[0], sportsCategory);

      const sportsQuestions = screen.queryByText("question 2");
      const animalsQuestions = screen.queryByText("question 1");

      expect(sportsQuestions).toBeInTheDocument();
      expect(animalsQuestions).not.toBeInTheDocument();
    });
  });

  describe("When a type filter is applied", () => {
    test("Then it should not render the not matching questions", () => {
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
          category: "Sports",
          type: "multiple",
          difficulty: "easy",
          question: "question 2",
          selected: true,
        },
      ];

      const providerValue = {
        currentAllQuestions: questions,
        currentQuestions: [],
        allQuestionsDispatch: () => {},
        questionDispatch: () => {},
      };

      render(
        <BrowserRouter>
          <TrivialContext.Provider value={providerValue}>
            <SelectYourQuestionsComponent onSave={() => {}} />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const filters = screen.getAllByRole("combobox");
      const multipleChoiceType = screen.getByRole("option", {
        name: "Multiple Choice",
      });

      userEvent.selectOptions(filters[1], multipleChoiceType);

      const sportsQuestions = screen.queryByText("question 2");
      const animalsQuestions = screen.queryByText("question 1");

      expect(sportsQuestions).toBeInTheDocument();
      expect(animalsQuestions).not.toBeInTheDocument();
    });
  });

  describe("When the allQuestions array is longer than 20 questions", () => {
    test("Then it should not render the page controlls", () => {
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
          category: "Sports",
          type: "multiple",
          difficulty: "easy",
          question: "question 2",
          selected: true,
        },
        {
          id: 3,
          category: "Animals",
          type: "boolean",
          difficulty: "easy",
          question: "question 1",
          selected: true,
        },
        {
          id: 4,
          category: "Sports",
          type: "multiple",
          difficulty: "easy",
          question: "question 2",
          selected: true,
        },
        {
          id: 5,
          category: "Animals",
          type: "boolean",
          difficulty: "easy",
          question: "question 1",
          selected: true,
        },
        {
          id: 6,
          category: "Sports",
          type: "multiple",
          difficulty: "easy",
          question: "question 2",
          selected: true,
        },
        {
          id: 7,
          category: "Animals",
          type: "boolean",
          difficulty: "easy",
          question: "question 1",
          selected: true,
        },
        {
          id: 8,
          category: "Sports",
          type: "multiple",
          difficulty: "easy",
          question: "question 2",
          selected: true,
        },
        {
          id: 9,
          category: "Animals",
          type: "boolean",
          difficulty: "easy",
          question: "question 1",
          selected: true,
        },
        {
          id: 10,
          category: "Sports",
          type: "multiple",
          difficulty: "easy",
          question: "question 2",
          selected: true,
        },
        {
          id: 11,
          category: "Animals",
          type: "boolean",
          difficulty: "easy",
          question: "question 1",
          selected: true,
        },
        {
          id: 12,
          category: "Sports",
          type: "multiple",
          difficulty: "easy",
          question: "question 2",
          selected: true,
        },
        {
          id: 13,
          category: "Animals",
          type: "boolean",
          difficulty: "easy",
          question: "question 1",
          selected: true,
        },
        {
          id: 14,
          category: "Sports",
          type: "multiple",
          difficulty: "easy",
          question: "question 2",
          selected: true,
        },
        {
          id: 15,
          category: "Animals",
          type: "boolean",
          difficulty: "easy",
          question: "question 1",
          selected: true,
        },
        {
          id: 16,
          category: "Sports",
          type: "multiple",
          difficulty: "easy",
          question: "question 2",
          selected: true,
        },
        {
          id: 17,
          category: "Animals",
          type: "boolean",
          difficulty: "easy",
          question: "question 1",
          selected: true,
        },
        {
          id: 18,
          category: "Sports",
          type: "multiple",
          difficulty: "easy",
          question: "question 2",
          selected: true,
        },
        {
          id: 19,
          category: "Animals",
          type: "boolean",
          difficulty: "easy",
          question: "question 1",
          selected: true,
        },
        {
          id: 20,
          category: "Sports",
          type: "multiple",
          difficulty: "easy",
          question: "question 2",
          selected: true,
        },
        {
          id: 21,
          category: "Sports",
          type: "multiple",
          difficulty: "easy",
          question: "question 2",
          selected: true,
        },
      ];

      const providerValue = {
        currentAllQuestions: questions,
        currentQuestions: [],
        allQuestionsDispatch: () => {},
        questionDispatch: () => {},
      };

      render(
        <BrowserRouter>
          <TrivialContext.Provider value={providerValue}>
            <SelectYourQuestionsComponent onSave={() => {}} />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const arrowContainer = screen.getByTestId("arrowsContainer");

      expect(arrowContainer).toBeInTheDocument();
    });
  });

  describe("When the allQuestions array is longer than 20 questions and the right arrow is pressed", () => {
    test("Then it should only render questions from index 20 to 40", () => {
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
          category: "Sports",
          type: "multiple",
          difficulty: "easy",
          question: "question 2",
          selected: true,
        },
        {
          id: 3,
          category: "Animals",
          type: "boolean",
          difficulty: "easy",
          question: "question 1",
          selected: true,
        },
        {
          id: 4,
          category: "Sports",
          type: "multiple",
          difficulty: "easy",
          question: "question 2",
          selected: true,
        },
        {
          id: 5,
          category: "Animals",
          type: "boolean",
          difficulty: "easy",
          question: "question 1",
          selected: true,
        },
        {
          id: 6,
          category: "Sports",
          type: "multiple",
          difficulty: "easy",
          question: "question 2",
          selected: true,
        },
        {
          id: 7,
          category: "Animals",
          type: "boolean",
          difficulty: "easy",
          question: "question 1",
          selected: true,
        },
        {
          id: 8,
          category: "Sports",
          type: "multiple",
          difficulty: "easy",
          question: "question 2",
          selected: true,
        },
        {
          id: 9,
          category: "Animals",
          type: "boolean",
          difficulty: "easy",
          question: "question 1",
          selected: true,
        },
        {
          id: 10,
          category: "Sports",
          type: "multiple",
          difficulty: "easy",
          question: "question 2",
          selected: true,
        },
        {
          id: 11,
          category: "Animals",
          type: "boolean",
          difficulty: "easy",
          question: "question 1",
          selected: true,
        },
        {
          id: 12,
          category: "Sports",
          type: "multiple",
          difficulty: "easy",
          question: "question 2",
          selected: true,
        },
        {
          id: 13,
          category: "Animals",
          type: "boolean",
          difficulty: "easy",
          question: "question 1",
          selected: true,
        },
        {
          id: 14,
          category: "Sports",
          type: "multiple",
          difficulty: "easy",
          question: "question 2",
          selected: true,
        },
        {
          id: 15,
          category: "Animals",
          type: "boolean",
          difficulty: "easy",
          question: "question 1",
          selected: true,
        },
        {
          id: 16,
          category: "Sports",
          type: "multiple",
          difficulty: "easy",
          question: "question 2",
          selected: true,
        },
        {
          id: 17,
          category: "Animals",
          type: "boolean",
          difficulty: "easy",
          question: "question 1",
          selected: true,
        },
        {
          id: 18,
          category: "Sports",
          type: "multiple",
          difficulty: "easy",
          question: "question 2",
          selected: true,
        },
        {
          id: 19,
          category: "Animals",
          type: "boolean",
          difficulty: "easy",
          question: "question 1",
          selected: true,
        },
        {
          id: 20,
          category: "Sports",
          type: "multiple",
          difficulty: "easy",
          question: "page1 question",
          selected: true,
        },
        {
          id: 21,
          category: "Sports",
          type: "multiple",
          difficulty: "easy",
          question: "page2 question",
          selected: true,
        },
      ];

      const providerValue = {
        currentAllQuestions: questions,
        currentQuestions: [],
        allQuestionsDispatch: () => {},
        questionDispatch: () => {},
      };

      render(
        <BrowserRouter>
          <TrivialContext.Provider value={providerValue}>
            <SelectYourQuestionsComponent onSave={() => {}} />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const page1QuestionInPage1 = screen.queryByText("page1 question");
      const page2QuestionInPage1 = screen.queryByText("page2 question");
      const pageArrows = screen.getAllByTestId("pageArrow");

      expect(page1QuestionInPage1).toBeInTheDocument();
      expect(page2QuestionInPage1).not.toBeInTheDocument();

      userEvent.click(pageArrows[1]);

      const page1QuestionInPage2 = screen.queryByText("page1 question");
      const page2QuestionInPage2 = screen.queryByText("page2 question");

      expect(page1QuestionInPage2).not.toBeInTheDocument();
      expect(page2QuestionInPage2).toBeInTheDocument();
    });
  });
});
