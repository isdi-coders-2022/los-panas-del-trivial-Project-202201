import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TrivialContextProvider from "../store/contexts/TrivialContextProvider";
import GameListPage from "./GameListPage";

describe("Given GameListPage", () => {
  describe("When it is invoked", () => {
    test("Then it should render the backArrowComponent, the TitleComponent and a ul", () => {
      render(
        <BrowserRouter>
          <TrivialContextProvider>
            <GameListPage />
          </TrivialContextProvider>
        </BrowserRouter>
      );

      const backarrow = screen.queryByTestId("arrow");
      const title = screen.queryByRole("heading", { level: 1 });
      const list = screen.queryByRole("list");

      expect(backarrow).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(list).toBeInTheDocument();
    });

    test("The title component should display 'Game List'", async () => {
      render(
        <BrowserRouter>
          <TrivialContextProvider>
            <GameListPage />
          </TrivialContextProvider>
        </BrowserRouter>
      );

      const prueba = await screen.findByText(/pruebamsw/i);
      expect(prueba).toBeInTheDocument();
    });
  });

  describe("When the delete button is clicked", () => {
    test("Then it should delete the item", () => {});
  });
});
