import { render, screen } from "@testing-library/react";
import SelectYourQuestionsComponent from "./SelectYourQuestionsComponent";

describe("Given a SelectYourQuestionsComponent", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a heading with the text 'Select Your Questions'", () => {
      const expectedText = "Select Your Questions";

      render(<SelectYourQuestionsComponent />);

      const foundHeading = screen.queryByRole("heading");

      expect(foundHeading.textContent).toBe(expectedText);
    });

    test("Then it should render a button with the text 'Save'", () => {
      const expectedText = "Save";

      render(<SelectYourQuestionsComponent />);

      const foundHeading = screen.queryByRole("button");

      expect(foundHeading.textContent).toBe(expectedText);
    });
  });
});
