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

  describe("When a filter is applied", () => {
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
});
