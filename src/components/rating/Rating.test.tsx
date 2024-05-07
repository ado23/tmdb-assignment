import { render } from "@testing-library/react";
import Rating from "components/rating/Rating";

describe("Rating component", () => {
  it("displays the correct rounded rating when rating prop is provided", () => {
    const { getByText } = render(<Rating rating={8.567} />);
    expect(getByText("8.6 / 10")).toBeInTheDocument();
  });
});
