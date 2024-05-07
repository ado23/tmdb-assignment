import { render } from "@testing-library/react";
import Typography, { TypographyProps } from "./Typography";

describe("Typography", () => {
  const defaultProps: TypographyProps = {
    variant: "text",
    children: "Test"
  };

  it("passes through the children prop correctly", () => {
    const { getByText } = render(<Typography {...defaultProps} />);
    expect(getByText("Test")).toBeInTheDocument();
  });

  it("spreads the rest props correctly", () => {
    const { container } = render(<Typography {...defaultProps} data-testid="test" />);
    expect(container.firstChild).toHaveAttribute("data-testid", "test");
  });
});
