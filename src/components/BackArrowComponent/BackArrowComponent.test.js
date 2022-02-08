import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BackArrow from "./BackArrowComponent";

describe("Given BackArrowComponent", () => {
  describe("When it recieves an actionOnClick", () => {
    test("Then actionOnClick should be invoked when the button is clicked", () => {
      const action = jest.fn();

      render(<BackArrow actionOnClick={action} />);

      const foundElement = screen.queryByTestId("arrow");
      userEvent.click(foundElement);

      expect(action).toHaveBeenCalled();
    });
  });
});
