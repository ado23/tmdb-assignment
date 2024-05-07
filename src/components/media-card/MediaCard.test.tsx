import { render, fireEvent } from "@testing-library/react";
import MediaCard from "./MediaCard";

describe("MediaCard", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <MediaCard name="Test Movie" poster="test.jpg" rating={7.5} releaseDate="2021-01-01" />
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders the correct name", () => {
    const { getByText } = render(
      <MediaCard name="Test Movie" poster="test.jpg" rating={7.5} releaseDate="2021-01-01" />
    );
    expect(getByText("Test Movie")).toBeInTheDocument();
  });

  it("renders the correct poster", () => {
    const { getByAltText } = render(
      <MediaCard name="Test Movie" poster="test.jpg" rating={7.5} releaseDate="2021-01-01" />
    );
    expect(getByAltText("Test Movie")).toHaveAttribute("src", "test.jpg");
  });

  it("renders the correct release date", () => {
    const { getByText } = render(
      <MediaCard name="Test Movie" poster="test.jpg" rating={7.5} releaseDate="2021-01-01" />
    );
    expect(getByText("2021-01-01")).toBeInTheDocument();
  });

  it("calls the onClick handler when clicked", () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <MediaCard
        name="Test Movie"
        poster="test.jpg"
        rating={7.5}
        releaseDate="2021-01-01"
        handleOnClick={handleClick}
      />
    );
    fireEvent.click(getByRole("button"));
    expect(handleClick).toHaveBeenCalled();
  });

  it("renders the correct number of child elements", () => {
    const { container } = render(
      <MediaCard name="Test Movie" poster="test.jpg" rating={7.5} releaseDate="2021-01-01" />
    );
    expect(container.children).toHaveLength(1);
  });
});
