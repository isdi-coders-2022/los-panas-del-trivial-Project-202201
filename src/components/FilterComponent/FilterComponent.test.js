import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterComponent from "./FilterComponent";

describe("Given a FilterComponent", () => {
  describe("When it's rendered", () => {
    test("Then, it should have the options Any Type and Any Category selected", () => {
      const defaultType = "Any Type";
      const defaultCategory = "Any Category";

      render(
        <FilterComponent
          data={{
            type: defaultType,
            setType: () => {},
            category: defaultCategory,
            setCategory: () => {},
          }}
        />
      );

      const anyTypeOption = screen.getByRole("option", { name: defaultType });
      const anyCategoryOption = screen.getByRole("option", {
        name: defaultCategory,
      });

      expect(anyTypeOption.selected).toBeTruthy();
      expect(anyCategoryOption.selected).toBeTruthy();
    });
  });

  describe("When any optioon is selected", () => {
    test("Then, it should call the corresponding setter", () => {
      const defaultType = "Any Type";
      const setType = jest.fn();

      const defaultCategory = "Any Category";
      const setCategory = jest.fn();

      render(
        <FilterComponent
          data={{
            type: defaultType,
            setType,
            category: defaultCategory,
            setCategory,
          }}
        />
      );

      const selects = screen.getAllByRole("combobox");

      const sportsCategory = screen.getByRole("option", {
        name: "Sports",
      });

      const multipleChoiceType = screen.getByRole("option", {
        name: "Multiple Choice",
      });

      userEvent.selectOptions(selects[0], sportsCategory);
      userEvent.selectOptions(selects[1], multipleChoiceType);

      expect(setCategory).toHaveBeenCalledTimes(1);
      expect(setType).toHaveBeenCalledTimes(1);
    });
  });
});

// fireEvent.change(getByTestId("select"), { target: { value: 2 } });
