import { render } from "@testing-library/react";
import Loader from "./Loader";

describe("Loader component", () => {
  it("renders without throwing any errors", () => {
    render(<Loader />);
  });

  it("renders the correct number of child elements", () => {
    const { container } = render(<Loader />);
    expect(container.children).toHaveLength(1);
  });

  it("renders the correct number of child elements", () => {
    const { container } = render(<Loader />);
    expect(container.children).toHaveLength(1);
  });
});
