import { render } from "@testing-library/react";
import NoResults from "./NoResults";

describe("No Results component", () => {
  it("renders without throwing any errors", () => {
    render(<NoResults />);
  });

  it("renders the correct number of child elements", () => {
    const { container } = render(<NoResults />);
    expect(container.children).toHaveLength(1);
  });

  it("renders the correct number of child elements", () => {
    const { container } = render(<NoResults />);
    expect(container.children).toHaveLength(1);
  });

  it("renders the correct text content", () => {
    const { getByText } = render(<NoResults />);
    expect(getByText("No results, try something else...")).toBeInTheDocument();
  });
});
