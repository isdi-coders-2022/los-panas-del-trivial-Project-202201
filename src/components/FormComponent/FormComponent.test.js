import { render, screen } from "@testing-library/react";
import FormComponent from "./FormComponent";

describe("Given FormComponent", () => {
  describe("When it is rendered", () => {
    test("Then it should render 2 inputs and 1 select with 3 options", () => {
      const expectedOptions = 3;

      render(<FormComponent onSubmit={() => {}} />);

      const creatorInput = screen.queryByPlaceholderText("Input your name");
      const nameInput = screen.queryByPlaceholderText("Input the game's name");

      const selectsDifficulty = screen.queryAllByRole("option");

      expect(creatorInput).toBeInTheDocument();
      expect(nameInput).toBeInTheDocument();
      expect(selectsDifficulty.length).toBe(expectedOptions);
    });
  });
});
