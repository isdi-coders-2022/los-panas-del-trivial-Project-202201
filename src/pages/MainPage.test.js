import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./MainPage";

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
});
