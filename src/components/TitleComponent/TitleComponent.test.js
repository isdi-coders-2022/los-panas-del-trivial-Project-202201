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
});
