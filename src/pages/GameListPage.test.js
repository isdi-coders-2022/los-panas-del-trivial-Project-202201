import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import GameListPage from "./GameListPage";

describe("Given GameListPage", () => {
  describe("When it is invoked", () => {
    test("Then it should render the backArrowComponent, the TitleComponent and a ul", () => {
      render(
        <BrowserRouter>
          <GameListPage />
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

      render(
        <BrowserRouter>
          <GameListPage />
        </BrowserRouter>
      );

      const title = screen.queryByText(expectedTitle);

      expect(title).toBeInTheDocument();
    });
  });
});
