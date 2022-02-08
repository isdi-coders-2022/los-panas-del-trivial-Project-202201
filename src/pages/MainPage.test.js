import { render, screen } from "@testing-library/react";
import MainPage from "./MainPage";

describe("Given a MainPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a heading with the text 'Let's Play!'", () => {
      const text = "Let's Play!";

      render(<MainPage />);

      const foundHeading = screen.queryAllByText(text);

      expect(foundHeading).toBeInTheDocument();
    });
  });
});
