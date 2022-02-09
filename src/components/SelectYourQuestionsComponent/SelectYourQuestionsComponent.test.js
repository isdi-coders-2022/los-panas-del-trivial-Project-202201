import { render, screen } from "@testing-library/react";
import TrivialContext from "../../store/contexts/TrivialContext";
import SelectYourQuestionsComponent from "./SelectYourQuestionsComponent";

describe("Given a SelectYourQuestionsComponent", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a heading with the text 'Select Your Questions'", () => {
      const expectedText = "Select Your Questions";

      render(
        <TrivialContext.Provider value={{ currentAllQuestions: [] }}>
          <SelectYourQuestionsComponent />
        </TrivialContext.Provider>
      );

      const foundHeading = screen.queryByRole("heading");

      expect(foundHeading.textContent).toBe(expectedText);
    });

    test("Then it should render a button with the text 'Save'", () => {
      const expectedText = "Save";

      render(
        <TrivialContext.Provider value={{ currentAllQuestions: [] }}>
          <SelectYourQuestionsComponent />
        </TrivialContext.Provider>
      );

      const foundHeading = screen.queryByRole("button");

      expect(foundHeading.textContent).toBe(expectedText);
    });

    test("Then it should render a BackArrowComponent", () => {
      render(
        <TrivialContext.Provider value={{ currentAllQuestions: [] }}>
          <SelectYourQuestionsComponent />
        </TrivialContext.Provider>
      );

      const foundHeading = screen.queryByTestId("arrow");

      expect(foundHeading).toBeInTheDocument();
    });
  });
});
