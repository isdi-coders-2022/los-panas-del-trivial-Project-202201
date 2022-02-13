import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./MainPage";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a MainPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a heading with the text 'Let's Play!'", () => {
      const expectedText = "Let's Play!";

      render(
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      );
      const foundHeading = screen.queryAllByRole("heading");

      expect(foundHeading[1].textContent).toBe(expectedText);
    });
  });

  test("Then it should render two buttons'", () => {
    const expectedNumButtons = 2;

    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );
    const foundNumButtons = screen.queryAllByRole("button");

    expect(foundNumButtons.length).toBe(expectedNumButtons);
  });

  test("Then it should render a title with the text 'Trivial.Provider'", () => {
    const title = "Trivial.Provider";

    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );
    const foundTitle = screen.queryByText(title);

    expect(foundTitle).toBeInTheDocument();
  });

  describe("When the play now button is pressed", () => {
    test("Then it should call navigate passing the path '/games-list'", () => {
      const expectedPath = "/games-list";

      render(
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      );
      const playNowButton = screen.queryByRole("button", { name: "Play Now" });
      userEvent.click(playNowButton);

      expect(mockNavigate).toHaveBeenCalledWith(expectedPath);
    });
  });

  describe("When the create game button is pressed", () => {
    test("Then it should call navigate passing the path '/game/new'", () => {
      const expectedPath = "/game/new";

      render(
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      );
      const playNowButton = screen.queryByRole("button", {
        name: "Create Game",
      });
      userEvent.click(playNowButton);

      expect(mockNavigate).toHaveBeenCalledWith(expectedPath);
    });
  });
});
