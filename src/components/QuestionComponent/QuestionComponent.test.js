import { render, screen } from "@testing-library/react";
import QuestionComponent from "./QuestionComponent";

describe("Given a QuestionComponent", () => {
  describe("When it's instantiated with a questionText = 'hola", () => {
    test("Then it should render a the text 'hola'", () => {
      const expectedText = "hola";

      render(
        <QuestionComponent
          question={{
            question: "hola",
            type: "",
            selected: false,
            category: "",
          }}
        />
      );

      const foundElement = screen.queryByText(expectedText);

      expect(foundElement).toBeInTheDocument();
    });
  });
  describe("When it's instantiated with a typeQuestionText = 'multiple", () => {
    test("Then it should render the text 'Multiple Choice'", () => {
      const type = "multiple";
      const expectedText = "Multiple Choice";
      render(
        <QuestionComponent
          question={{
            question: "",
            type: type,
            selected: false,
            category: "",
          }}
        />
      );

      const foundElement = screen.queryByText(expectedText);

      expect(foundElement).toBeInTheDocument();
    });
  });

  describe("When it's instantiated with a typeQuestionText = 'boolean", () => {
    test("Then it should render the text 'True / False'", () => {
      const type = "boolean";
      const expectedText = "True / False";
      render(
        <QuestionComponent
          question={{
            question: "",
            type: type,
            selected: false,
            category: "",
          }}
        />
      );

      const foundElement = screen.queryByText(expectedText);

      expect(foundElement).toBeInTheDocument();
    });
  });

  describe("When it's instantiated with a category of 'hello kitty'", () => {
    test("Then it should render the text 'category'", () => {
      const category = "hello kitty";
      const expectedText = "hello kitty";
      render(
        <QuestionComponent
          question={{
            question: "",
            type: "",
            selected: false,
            category: category,
          }}
        />
      );

      const foundElement = screen.queryByText(expectedText);

      expect(foundElement).toBeInTheDocument();
    });
  });
});
