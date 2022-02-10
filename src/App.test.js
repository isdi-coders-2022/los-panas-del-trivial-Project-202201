import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("Given a App component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a header with Trivial.Provider text", () => {
      const text = "Trivial.Provider";
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      const foundText = screen.queryByText(text);
      expect(foundText).toBeInTheDocument();
    });
  });
});
