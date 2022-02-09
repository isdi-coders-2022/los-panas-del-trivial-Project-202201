import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormComponent from "./FormComponent";

describe("Given FormComponent", () => {
  describe("When it is rendered", () => {
    test("Then it should render 2 inputs, 1 select with 3 options and a button", () => {
      const expectedOptions = 3;
      const name = { name: "", setName: () => {} };
      const creator = { creator: "", setCreator: () => {} };
      const difficulty = { difficulty: "", setDifficulty: () => {} };

      render(
        <FormComponent
          name={name}
          creator={creator}
          difficulty={difficulty}
          onSubmit={() => {}}
        />
      );

      const creatorInput = screen.queryByPlaceholderText("Input your name");
      const nameInput = screen.queryByPlaceholderText("Input the game's name");
      const submitButton = screen.queryByRole("button");
      const selectsDifficulty = screen.queryAllByRole("option");

      expect(creatorInput).toBeInTheDocument();
      expect(nameInput).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
      expect(selectsDifficulty.length).toBe(expectedOptions);
    });
  });

  describe("When it is instanciated passing an onSubmit action", () => {
    test("Then it should call the onSubmit action when the button is pressed", () => {
      const action = jest.fn();
      const name = { name: "", setName: () => {} };
      const creator = { creator: "", setCreator: () => {} };
      const difficulty = { difficulty: "", setDifficulty: () => {} };

      render(
        <FormComponent
          name={name}
          creator={creator}
          difficulty={difficulty}
          onSubmit={action}
        />
      );

      const submitButton = screen.queryByRole("button");

      userEvent.click(submitButton);
      expect(action).toHaveBeenCalled();
    });
  });
});
