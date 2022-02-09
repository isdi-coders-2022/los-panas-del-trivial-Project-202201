import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given NotFoundPage", () => {
  describe("When it's rendered", () => {
    test("Then it should present a heading with the text 'PageNotFound'", () => {
      const expectedText = "Page Not Found";

      render(<NotFoundPage />);

      const headingElement = screen.queryByRole("heading", { level: 1 });

      expect(headingElement.textContent).toBe(expectedText);
    });
  });
});
