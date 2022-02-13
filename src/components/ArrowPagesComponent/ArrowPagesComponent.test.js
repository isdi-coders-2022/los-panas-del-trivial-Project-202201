import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ArrowPagesComponent from "./ArrowPagesComponent";

describe("Given a ArrowPagesComponent", () => {
  describe("When the button receives an actionOnClick", () => {
    test("Then it should call the action", () => {
      const action = jest.fn();

      render(
        <ArrowPagesComponent
          actionOnClick={action}
          showSide={true}
          disabled={false}
        />
      );

      const foundButton = screen.getByRole("button");
      userEvent.click(foundButton);

      expect(action).toHaveBeenCalled();
    });
  });

  describe("When the button receives an actionOnClick and it's disabled", () => {
    test("Then it shouldn't call the action", () => {});
  });
});
