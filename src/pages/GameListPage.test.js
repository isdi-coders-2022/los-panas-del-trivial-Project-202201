import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import TrivialContextProvider from "../store/contexts/TrivialContextProvider";
import GameListPage from "./GameListPage";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

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
    test("Then it should delete the item", async () => {
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

      await waitFor(async () => expect(foundFirstGame).not.toBeInTheDocument());

      expect(foundFirstGame).not.toBeInTheDocument();
      expect(foundSecondGAme).toBeInTheDocument();
    });
  });

  describe("When the backArrow is clicked", () => {
    test("Then it should go to MainPage", async () => {
      render(
        <BrowserRouter>
          <TrivialContextProvider>
            <GameListPage />
          </TrivialContextProvider>
        </BrowserRouter>
      );

      const expectedPath = "/home";

      const backButton = screen.getByTestId("arrow");
      userEvent.click(backButton);

      expect(mockNavigate).toHaveBeenCalledWith(expectedPath);
    });
  });
});
