import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonComponent from "./ButtonComponent";

describe("Given ButtonComponent", () => {
  describe("When it recieves the text 'hello'", () => {
    test("Then it should render an element with the text 'hello'", () => {
      const text = "hello";

      render(<ButtonComponent text={text} />);

      const foundElement = screen.queryByText(text);

      expect(foundElement).not.toBeNull();
    });
  });

  describe("When it recieves an actionOnClick", () => {
    test("Then actionOnClick should be invoked when the button is clicked", () => {
      const action = jest.fn();

      render(<ButtonComponent actionOnClick={action} />);

      const foundElement = screen.queryByRole("button");
      userEvent.click(foundElement);

      expect(action).toHaveBeenCalled();
    });
  });
});
