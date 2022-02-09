import { render, screen } from "@testing-library/react";
import CreateGamePage from "./CreateGamePage";

describe("Given a CreateGamePage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a heading with the text 'Create Game'", () => {
      const expectedText = "Create Game";

      render(<CreateGamePage />);
      const foundHeading = screen.queryAllByRole("heading");

      expect(foundHeading[0].textContent).toBe(expectedText);
    });
  });
});
