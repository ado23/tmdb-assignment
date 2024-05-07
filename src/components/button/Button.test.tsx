import { render, fireEvent } from "@testing-library/react";
import Button from "components/button/Button";

describe("Button", () => {
  it("Button renders correctly", () => {
    const onClick = vi.fn();
    const { getByText } = render(<Button id="test-button" text="Click Me" onClick={onClick} />);
    const buttonElement = getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();
  });

  it("Button onClick function is triggered when clicked", () => {
    const onClick = vi.fn();
    const { getByText } = render(<Button id="test-button" text="Click Me" onClick={onClick} />);
    const buttonElement = getByText("Click Me");
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("Button is disabled when disabled prop is true", () => {
    const onClick = vi.fn();
    const { getByText } = render(
      <Button id="test-button" text="Click Me" disabled onClick={onClick} />
    );
    const buttonElement = getByText("Click Me");
    expect(buttonElement).toBeDisabled();
  });

  it("Button has aria-label when ariaLabel prop is provided", () => {
    const onClick = vi.fn();
    const { getByText } = render(
      <Button id="test-button" text="Click Me" ariaLabel="test-aria-label" onClick={onClick} />
    );
    const buttonElement = getByText("Click Me");
    expect(buttonElement).toHaveAttribute("aria-label", "test-aria-label");
  });

  it("Button has aria-describedby when ariaDescribedBy prop is provided", () => {
    const onClick = vi.fn();
    const { getByText } = render(
      <Button
        id="test-button"
        text="Click Me"
        ariaDescribedBy="test-aria-describedby"
        onClick={onClick}
      />
    );
    const buttonElement = getByText("Click Me");
    expect(buttonElement).toHaveAttribute("aria-describedby", "test-aria-describedby");
  });

  it("Button renders correctly with id, text, and variant", () => {
    const onClick = vi.fn().mockImplementation(() => {});
    const { getByText } = render(
      <Button id="test-button" text="Click Me" variant="secondary" onClick={onClick} />
    );
    const buttonElement = getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute("id", "test-button");
  });

  it("Button onClick function is triggered when clicked", () => {
    const onClick = vi.fn().mockImplementation(() => console.log("Clicked"));
    const { getByText } = render(<Button id="test-button" text="Click Me" onClick={onClick} />);
    const buttonElement = getByText("Click Me");
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
