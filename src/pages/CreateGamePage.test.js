import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TrivialContext from "../store/contexts/TrivialContext";
import CreateGamePage from "./CreateGamePage";
import userEvent from "@testing-library/user-event";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a CreateGamePage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a heading with the text 'Create Game'", () => {
      const expectedText = "Create Game";

      render(
        <BrowserRouter>
          <TrivialContext.Provider value={{ allQuestionsDispatch: () => {} }}>
            <CreateGamePage />
          </TrivialContext.Provider>
        </BrowserRouter>
      );
      const foundHeading = screen.getByRole("heading", { level: 1 });

      expect(foundHeading.textContent).toBe(expectedText);
    });

    test("Then it should render a BackArrow component", () => {
      render(
        <BrowserRouter>
          <TrivialContext.Provider value={{ allQuestionsDispatch: () => {} }}>
            <CreateGamePage />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const foundArrow = screen.queryByTestId("arrow");

      expect(foundArrow).toBeInTheDocument();
    });

    test("Then it should render a FormComponent", () => {
      render(
        <BrowserRouter>
          <TrivialContext.Provider value={{ allQuestionsDispatch: () => {} }}>
            <CreateGamePage />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const foundForm = screen.getAllByRole("textbox");

      expect(foundForm).not.toBeNull();
    });
  });

  describe("When it's instantiated and the button is clicked", () => {
    test("Then it should render a 'Select Your Questions' heading", () => {
      const expectedText = "Select Your Questions";

      render(
        <BrowserRouter>
          <TrivialContext.Provider
            value={{
              allQuestionsDispatch: () => {},
              currentAllQuestions: [],
              currentQuestions: [],
            }}
          >
            <CreateGamePage />
          </TrivialContext.Provider>
        </BrowserRouter>
      );
      const button = screen.queryByRole("button");
      userEvent.click(button);

      const foundHeading = screen.getByRole("heading", { level: 1 });

      expect(foundHeading.textContent).toBe(expectedText);
    });
  });

  describe("When the user creates a game", () => {
    test("Then it should call the addGameAPI function, the allQuestions and questions dispatchers and the navigate with path '/home'", () => {
      const allQuestionsDispatch = jest.fn();
      const questionDispatch = jest.fn();
      const expectedPath = "/home";
      const questions = [
        {
          id: 1,
          category: "Sports",
          type: "multiple",
          difficulty: "easy",
          question: "question 2",
          selected: false,
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
      const selectedQuestions = [
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
        allQuestionsDispatch,
        questionDispatch,
        currentAllQuestions: questions,
        currentQuestions: selectedQuestions,
      };

      render(
        <BrowserRouter>
          <TrivialContext.Provider value={providerValue}>
            <CreateGamePage />
          </TrivialContext.Provider>
        </BrowserRouter>
      );
      const createButton = screen.queryByRole("button");
      userEvent.click(createButton);

      const saveButton = screen.queryByRole("button", { name: "Save" });
      userEvent.click(saveButton);

      expect(allQuestionsDispatch).toHaveBeenCalledTimes(1);
      expect(questionDispatch).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith(expectedPath);
    });
  });
});
