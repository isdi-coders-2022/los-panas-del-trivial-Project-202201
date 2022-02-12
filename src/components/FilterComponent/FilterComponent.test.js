import { render, screen } from "@testing-library/react";
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

      // const categorySelect = screen.getByRole("combobox", { name: "category" });
      const anyTypeOption = screen.getByRole("option", { name: defaultType });
      const anyCategoryOption = screen.getByRole("option", {
        name: defaultCategory,
      });

      expect(anyTypeOption.selected).toBeTruthy();
      expect(anyCategoryOption.selected).toBeTruthy();
    });
  });
});

// fireEvent.change(getByTestId("select"), { target: { value: 2 } });
