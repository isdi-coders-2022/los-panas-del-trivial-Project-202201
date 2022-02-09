import { render, screen } from "@testing-library/react";
import GameListPage from "./GameListPage";

describe("Given GameListPage", () => {
  describe("When it is invoked", () => {
    test("Then it should render the backArrowComponent, the TitleComponent and a ul", () => {
      render(<GameListPage />);

      const backarrow = screen.queryByTestId("arrow");
      const title = screen.queryByRole("heading");

      expect(backarrow).toBeInTheDocument();
      expect(title).toBeInTheDocument();
    });
  });
});
