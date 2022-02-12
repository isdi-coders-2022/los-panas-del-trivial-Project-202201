import { render, screen } from "@testing-library/react";
import FilterComponent from "./FilterComponent";

describe("Given a FilterComponent", () => {
  describe("When it's rendered", () => {
    test("Then, it should display Any Category option", () => {
      const value = "Any Category";

      render(
        <FilterComponent data={("Type", () => {}, "category", () => {})} />
      );

      const foundText = screen.getByText(value);

      expect(foundText).toBeInTheDocument();
    });
  });
});
