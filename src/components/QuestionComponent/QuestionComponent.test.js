import { render, screen } from "@testing-library/react";
import QuestionComponent from "./QuestionComponent";

describe("Given a QuestionComponent", () => {
  describe("When it's instantiated with a questionText = 'hola", () => {
    test("Then it should render a questionText", () => {
      const expectedText = "hola";
      const typeQuestionText = "asds";

      render(
        <QuestionComponent
          questionText={expectedText}
          typeQuestionText={typeQuestionText}
        />
      );

      const findText = screen.queryAllByText(expectedText);

      expect(findText[0]).toBeInTheDocument();
    });
  });
});
