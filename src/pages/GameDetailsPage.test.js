import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import TrivialContext from "../store/contexts/TrivialContext";
import GameDetailsPage from "./GameDetailsPage";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "3" }),
  useNavigate: () => mockNavigate,
}));

describe("Given a GameDetailsPage component", () => {
  describe("When it receives a game with 'Dan Abramov' as creator name", () => {
    test("Then it should render a game detail with the text 'Dan Abramov'", () => {
      const expectedText = "Dan Abramov";

      const currentGames = [
        {
          id: 3,
          name: "test's game",
          creator: "Dan Abramov",
          difficulty: "Easy",
          questions: [],
        },
      ];

      render(
        <BrowserRouter>
          <TrivialContext.Provider value={{ currentGames }}>
            <GameDetailsPage />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const creatorElement = screen.getByText(expectedText);

      expect(creatorElement).toBeInTheDocument();
    });
  });

  describe("When it gets an invalid id with params", () => {
    test("Then it should render a the page not found component", () => {
      const expectedText = "404";

      const currentGames = [
        {
          id: 2,
          name: "test's game",
          creator: "Dan Abramov",
          difficulty: "Easy",
          questions: [],
        },
      ];

      render(
        <BrowserRouter>
          <TrivialContext.Provider value={{ currentGames }}>
            <GameDetailsPage />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const notFoundElement = screen.getByText(expectedText);

      expect(notFoundElement).toBeInTheDocument();
    });
  });

  describe("When the backarrow component is clicked", () => {
    test("Then it should call navigate with the path '/games-list'", () => {
      const expectedPath = "/games-list";

      const currentGames = [
        {
          id: 3,
          name: "test's game",
          creator: "Dan Abramov",
          difficulty: "Easy",
          questions: [],
        },
      ];

      render(
        <BrowserRouter>
          <TrivialContext.Provider value={{ currentGames }}>
            <GameDetailsPage />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const backArrow = screen.getByTestId("arrow");
      userEvent.click(backArrow);

      expect(mockNavigate).toHaveBeenCalledWith(expectedPath);
    });
  });

  describe("When it grabs a game with some questions", () => {
    test("Then it should render the game's questrions", () => {
      const expectedText = "hello?";
      const expectedQuestions = 2;

      const currentGames = [
        {
          id: 3,
          name: "test's game",
          creator: "Dan Abramov",
          difficulty: "Easy",
          questions: [
            {
              question: "hello?",
              difficulty: "Easy",
              type: "multiple",
              category: "Sports",
            },
            {
              question: "hello2?",
              difficulty: "Easy",
              type: "multiple",
              category: "Sports",
            },
          ],
        },
      ];

      render(
        <BrowserRouter>
          <TrivialContext.Provider value={{ currentGames }}>
            <GameDetailsPage />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const questionElements = screen.getAllByRole("listitem");
      const questionText = screen.getByText(expectedText);

      expect(questionElements.length).toBe(expectedQuestions);
      expect(questionText).toBeInTheDocument();
    });
  });
});
