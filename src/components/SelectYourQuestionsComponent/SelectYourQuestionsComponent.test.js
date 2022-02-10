import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TrivialContext from "../../store/contexts/TrivialContext";
import SelectYourQuestionsComponent from "./SelectYourQuestionsComponent";

describe("Given a SelectYourQuestionsComponent", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a heading with the text 'Select Your Questions'", () => {
      const expectedText = "Select Your Questions";

      const providerValue = {
        currentAllQuestions: [],
        currentQuestions: [],
        allQuestionsDispatch: () => {},
        questionDispatch: () => {},
      };

      render(
        <BrowserRouter>
          <TrivialContext.Provider value={providerValue}>
            <SelectYourQuestionsComponent />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const foundHeading = screen.queryByRole("heading");

      expect(foundHeading.textContent).toBe(expectedText);
    });

    test("Then it should render a button with the text 'Save'", () => {
      const expectedText = "Save";
      const providerValue = {
        currentAllQuestions: [],
        currentQuestions: [],
        allQuestionsDispatch: () => {},
        questionDispatch: () => {},
      };

      render(
        <BrowserRouter>
          <TrivialContext.Provider value={providerValue}>
            <SelectYourQuestionsComponent />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const foundHeading = screen.queryByRole("button");

      expect(foundHeading.textContent).toBe(expectedText);
    });

    test("Then it should render a BackArrowComponent", () => {
      const providerValue = {
        currentAllQuestions: [],
        currentQuestions: [],
        allQuestionsDispatch: () => {},
        questionDispatch: () => {},
      };

      render(
        <BrowserRouter>
          <TrivialContext.Provider value={providerValue}>
            <SelectYourQuestionsComponent />
          </TrivialContext.Provider>
        </BrowserRouter>
      );

      const foundHeading = screen.queryByTestId("arrow");

      expect(foundHeading).toBeInTheDocument();
    });
  });
});
