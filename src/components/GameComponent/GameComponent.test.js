import { render, screen } from "@testing-library/react";
import GameComponent from "./GameComponent";

describe("Given GameComponent", () => {
  describe("When it recieves a game", () => {
    test("Then it should render the game's info", () => {
      const game = {
        id: 3,
        name: "test's game",
        creator: "Dan Abramov",
        difficulty: "Easy",
        questions: [],
      };
      const expectedDifficultyText = `Difficulty: ${game.difficulty}`;

      render(<GameComponent game={game} />);

      const nameElement = screen.queryByText(game.name);
      const creatorElement = screen.queryByText(game.creator);
      const difficultyElement = screen.queryByText(expectedDifficultyText);

      expect(nameElement).toBeInTheDocument();
      expect(creatorElement).toBeInTheDocument();
      expect(difficultyElement).toBeInTheDocument();
    });
  });
});
