import { render, screen } from "@testing-library/react";
import MainPage from "./MainPage";

describe("Given a MainPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a heading with the text 'Let's Play!'", () => {
      const expectedText = "Let's Play!";

      render(<MainPage />);
      const foundHeading = screen.queryAllByRole("heading");

      expect(foundHeading[1].textContent).toBe(expectedText);
    });
  });

  test("Then it should render two buttons'", () => {
    const expectedNumButtons = 2;

    render(<MainPage />);
    const foundNumButtons = screen.queryAllByRole("button");

    expect(foundNumButtons.length).toBe(expectedNumButtons);
  });

  test("Then it should render a title with the text 'Trivial.Provider'", () => {
    const title = "Trivial.Provider";

    render(<MainPage />);
    const foundTitle = screen.queryByText(title);

    expect(foundTitle).toBeInTheDocument();
  });
});
