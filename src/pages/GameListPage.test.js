import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
    test.only("Then it should delete the item", async () => {
      const firstGameName = /pruebamsw/i;
      const secondGameName = /secondGame/i;
      render(
        <BrowserRouter>
          <TrivialContextProvider>
            <GameListPage />
          </TrivialContextProvider>
        </BrowserRouter>
      );

      let foundFirstGame = await screen.findByText(firstGameName);
      let foundSecondGAme = await screen.findByText(secondGameName);

      expect(foundFirstGame).toBeInTheDocument();
      expect(foundSecondGAme).toBeInTheDocument();

      const deleteButton = screen.getAllByTestId("deleteIcon");
      userEvent.click(deleteButton[0]);
    });
  });
});
