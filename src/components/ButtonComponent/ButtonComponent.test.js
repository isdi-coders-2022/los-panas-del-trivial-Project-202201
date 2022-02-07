import { render, screen } from "@testing-library/react";
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
});
