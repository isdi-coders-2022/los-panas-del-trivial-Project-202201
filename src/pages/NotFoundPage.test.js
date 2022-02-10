import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given NotFoundPage", () => {
  describe("When it's rendered", () => {
    test("Then it should present a h1 element with the text 'PageNotFound'", () => {
      const expectedText = "Page Not Found";

      render(<NotFoundPage />);

      const headingElement = screen.queryByRole("heading", { level: 1 });

      expect(headingElement.textContent).toBe(expectedText);
    });

    test("Then it should present a h2 element with the text '404'", () => {
      const expectedText = "404";

      render(<NotFoundPage />);

      const headingElement = screen.queryByRole("heading", { level: 2 });

      expect(headingElement.textContent).toBe(expectedText);
    });
  });

  test("Then it should present an image element with the alt text 'Sad page'", () => {
    const expectedAltText = "Sad page";

    render(<NotFoundPage />);

    const imgElement = screen.queryByRole("img", { alt: expectedAltText });

    expect(imgElement).toBeInTheDocument();
  });
});
