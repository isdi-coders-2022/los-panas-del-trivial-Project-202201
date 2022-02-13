import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import TrivialContext from "../store/contexts/TrivialContext";
import EditGamePage from "./EditGamePage";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "3" }),
  useNavigate: () => mockNavigate,
}));

describe("Given a EditGamePage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a heading with the text 'Edit Game'", () => {
      const expectedTitle = "Edit Game";
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
            <EditGamePage />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const foundHeading = screen.getByRole("heading", { level: 1 });

      expect(foundHeading.textContent).toBe(expectedTitle);
    });

    test("Then it should render a BackArrow component", () => {
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
            <EditGamePage />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const foundArrow = screen.queryByTestId("arrow");

      expect(foundArrow).toBeInTheDocument();
    });
  });

  describe("When it's instantiated and the button is clicked", () => {
    test("Then it should navigate to the path '/games-list'", () => {
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
            <EditGamePage />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const editButton = screen.queryByRole("button");
      userEvent.click(editButton);

      expect(mockNavigate).toHaveBeenCalledWith(expectedPath);
    });
  });
});
