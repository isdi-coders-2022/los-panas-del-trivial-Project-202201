import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TrivialContext from "../store/contexts/TrivialContext";
import GameDetailsPage from "./GameDetailsPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "3" }),
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
});
