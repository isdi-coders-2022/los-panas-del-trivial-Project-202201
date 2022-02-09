import { render, screen } from "@testing-library/react";
import QuestionComponent from "./QuestionComponent";

describe("Given a QuestionComponent", () => {
  describe("When it's instantiated with a questionText = 'hola", () => {
    test("Then it should render a questionText text", () => {
      const expectedText = "hola";
      const typeQuestionText = "nohola";

      render(
        <QuestionComponent
          questionText="hola"
          typeQuestionText={typeQuestionText}
        />
      );

      const findText = screen.queryByText(expectedText);

      expect(findText.textContent).toBe(expectedText);
    });
  });
  describe("When it's instantiated with a typeQuestionText = 'hola", () => {
    test("Then it should render a questionText text", () => {
      const expectedText = "hola";
      const questionText = "nohola";

      render(
        <QuestionComponent
          questionText={questionText}
          typeQuestionText={"hola"}
        />
      );

      const findText = screen.queryByText(expectedText);

      expect(findText.textContent).toBe(expectedText);
    });
  });
});
