import { render, screen } from "@testing-library/react";
import FilterComponent from "./FilterComponent";

describe("Given a FilterComponent", () => {
  describe("When it's rendered", () => {
    test("Then, it should display Any Category option", () => {
      const text = "Sports";

      render(
        <FilterComponent data={("Type", () => {}, "Any Type", () => {})} />
      );

      const foundText = screen.getByText(text);

      expect(foundText).toBeInTheDocument();
    });
  });
});
