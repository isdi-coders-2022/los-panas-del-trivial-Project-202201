import { render } from "@testing-library/react";
import ArrowPagesComponent from "./ArrowPagesComponent";

describe("Given a ArrowPagesComponent", () => {
  describe("When the button receives an actionOnClick", () => {
    test("Then it should call the action", () => {
      const action = jest.fn();

      render(<ArrowPagesComponent actionOnClick={action} />);
    });
  });
});
