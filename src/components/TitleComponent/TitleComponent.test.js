import { render, screen } from "@testing-library/react";
import TitleComponent from "./TitleComponent";

describe("Given a TitleComponent", () => {
  describe("When it receives the text 'Magic'", () => {
    test("Then it should render a title with the Trivial logo and the text 'Magic'", () => {
      const text = "Magic";

      render(
        <TitleComponent size={"medium"} text={text} textColor={"black"} />
      );

      const foundTitle = screen.queryByRole("heading", { text: text });

      expect(foundTitle).toBeInTheDocument();
    });
  });
  describe("When it receives font-size 'medium'", () => {
    test("Then it should render a title with font-size 36px", () => {
      const size = "medium";
      const text = "ReactIsAwesome";

      render(<TitleComponent size={size} text={text} textColor={""} />);

      const foundTitle = screen.queryByText(text);
      const expectedSize = "36px";

      expect(foundTitle.style.fontSize).toMatch(expectedSize);
    });
  });
  describe("When it's instantiated", () => {
    test("Then it should render a title with an image logo with alternative text 'Trivial logo'", () => {
      const text = "Magic";
      const altText = "Trivial logo";

      render(
        <TitleComponent size={"medium"} text={text} textColor={"black"} />
      );

      const foundAltText = screen.queryByRole("img", { alt: altText });

      expect(foundAltText).toBeInTheDocument();
    });
  });
});
