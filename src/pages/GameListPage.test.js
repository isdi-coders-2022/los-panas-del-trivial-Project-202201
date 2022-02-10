import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TrivialContext from "../store/contexts/TrivialContext";
import GameListPage from "./GameListPage";

describe("Given GameListPage", () => {
  describe("When it is invoked", () => {
    test("Then it should render the backArrowComponent, the TitleComponent and a ul", () => {
      const currentGames = [
        {
          name: "Pau",
          creator: "Animals",
          difficulty: "easy",
          questions: [],
          id: 1,
        },
        {
          name: "Pau2",
          creator: "Animals2",
          difficulty: "hard",
          questions: [],
          id: 2,
        },
      ];

      render(
        <BrowserRouter>
          <TrivialContext.Provider value={{ currentGames }}>
            <GameListPage />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const backarrow = screen.queryByTestId("arrow");
      const title = screen.queryByRole("heading", { level: 1 });
      const list = screen.queryByRole("list");

      expect(backarrow).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(list).toBeInTheDocument();
    });

    test("The title component should display 'Game List'", () => {
      const expectedTitle = "Game List";
      const currentGames = [
        {
          name: "Pau",
          creator: "Animals",
          difficulty: "easy",
          questions: [],
          id: 1,
        },
        {
          name: "Pau2",
          creator: "Animals2",
          difficulty: "hard",
          questions: [],
          id: 2,
        },
      ];

      render(
        <BrowserRouter>
          <TrivialContext.Provider value={{ currentGames }}>
            <GameListPage />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const title = screen.queryByText(expectedTitle);

      expect(title).toBeInTheDocument();
    });
  });
});
