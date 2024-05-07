import { render } from "@testing-library/react";
import Search from "components/search/Search";

describe("Search component", () => {
  it("renders without crashing", () => {
    render(<Search id="search" ariaLabel="Search" handleOnChange={() => {}} />);
  });

  it("renders a label with the correct htmlFor attribute when the label prop is provided", () => {
    const { getByLabelText } = render(
      <Search id="search" ariaLabel="Search" label="Search" handleOnChange={() => {}} />
    );
    expect(getByLabelText("Search")).toBeInTheDocument();
  });

  it("renders an input element with the correct attributes and event handlers", () => {
    const handleOnChange = vi.fn();
    const { getByLabelText } = render(
      <Search
        id="search"
        ariaLabel="Search"
        label="Search"
        handleOnChange={handleOnChange}
        placeholder="Search..."
        defaultValue="example"
        ariaDescribedBy="description"
        autoComplete="on"
      />
    );
    const input = getByLabelText("Search");
    expect(input).toHaveAttribute("id", "search");
    expect(input).toHaveAttribute("aria-label", "Search");
    expect(input).toHaveAttribute("type", "search");
    expect(input).toHaveAttribute("inputMode", "search");
    expect(input).toHaveAttribute("placeholder", "Search...");
    expect(input).toHaveAttribute("autoComplete", "on");
    expect(input).toHaveAttribute("aria-describedby", "description");
  });
});
