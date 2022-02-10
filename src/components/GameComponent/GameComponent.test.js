import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import TrivialContext from "../../store/contexts/TrivialContext";
import GameComponent from "./GameComponent";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given GameComponent", () => {
  describe("When it recieves a game", () => {
    test("Then it should render the game's formatted info", () => {
      const game = {
        id: 3,
        name: "test's game",
        creator: "Dan Abramov",
        difficulty: "Easy",
        questions: [],
      };

      const expectedInfo = {
        name: "Test's game",
        creator: "Dan Abramov",
      };
      const expectedDifficultyText = `Difficulty: ${game.difficulty}`;

      const contextValueToGive = { deleteGame: "" };

      render(
        <BrowserRouter>
          <TrivialContext.Provider value={contextValueToGive}>
            <GameComponent game={game} />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const nameElement = screen.queryByText(expectedInfo.name);
      const creatorElement = screen.queryByText(expectedInfo.creator);
      const difficultyElement = screen.queryByText(expectedDifficultyText);

      expect(nameElement).toBeInTheDocument();
      expect(creatorElement).toBeInTheDocument();
      expect(difficultyElement).toBeInTheDocument();
    });
  });

  describe("When the trash icon is pressed", () => {
    test("Then it should call the deleteGame acton from the context passing the game Id", () => {
      const game = {
        id: 3,
        name: "test's game",
        creator: "Dan Abramov",
        difficulty: "Easy",
        questions: [],
      };
      const action = jest.fn();
      const contextValueToGive = {
        deleteGame: action,
      };

      render(
        <BrowserRouter>
          <TrivialContext.Provider value={contextValueToGive}>
            <GameComponent game={game} />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const deleteElement = screen.queryByTestId("deleteIcon");
      userEvent.click(deleteElement);

      expect(action).toHaveBeenCalledWith(game.id);
    });
  });

  describe("When the edit icon is pressed", () => {
    test("Then it should call the navigate function with the path /game/edit/3", () => {
      const game = {
        id: 3,
        name: "test's game",
        creator: "Dan Abramov",
        difficulty: "Easy",
        questions: [],
      };
      const expectedPath = "/game/edit/3";

      const contextValueToGive = {
        deleteGame: () => {},
      };

      render(
        <BrowserRouter>
          <TrivialContext.Provider value={contextValueToGive}>
            <GameComponent game={game} />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const editIcon = screen.queryByTestId("editIcon");
      userEvent.click(editIcon);

      expect(mockNavigate).toHaveBeenCalledWith(expectedPath);
    });
  });
});
