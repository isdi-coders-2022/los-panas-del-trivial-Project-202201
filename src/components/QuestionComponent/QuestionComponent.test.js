import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  describe("When it's instantiated with the property selected = true", () => {
    test("Then it should render backgroundColor = #242423", () => {
      const expectedColor = "background-color: #9882AC";

      render(
        <QuestionComponent
          question={{
            question: "",
            type: "",
            selected: true,
            category: "",
          }}
        />
      );

      const foundElement = screen.getByRole("listitem");

      expect(foundElement).toHaveStyle(expectedColor);
    });
  });

  describe("When it's clicked", () => {
    test("Then it should call the actionOnClick", () => {
      const actionOnClick = jest.fn();
      const questionText = "hello";
      render(
        <QuestionComponent
          question={{
            question: questionText,
            type: "",
            selected: false,
            category: "",
          }}
          actionOnClick={actionOnClick}
        />
      );

      const foundQuestion = screen.queryByText(questionText);
      userEvent.click(foundQuestion);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
