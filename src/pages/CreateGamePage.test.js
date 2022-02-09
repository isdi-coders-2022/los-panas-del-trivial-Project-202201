import { render, screen } from "@testing-library/react";
import CreateGamePage from "./CreateGamePage";

describe("Given a CreateGamePage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a heading with the text 'Create Game'", () => {
      const expectedText = "Create Game";

      render(<CreateGamePage />);
      const foundHeading = screen.getAllByRole("heading");

      expect(foundHeading[0].textContent).toBe(expectedText);
    });

    test("Then it should render a BackArrow component", () => {
      render(<CreateGamePage />);

      const foundArrow = screen.queryByTestId("arrow");

      expect(foundArrow).toBeInTheDocument();
    });

    test("Then it should render a FormComponent", () => {
      render(<CreateGamePage />);

      const foundForm = screen.getAllByRole("textbox");

      expect(foundForm).not.toBeNull();
    });
  });
});
