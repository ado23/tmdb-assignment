import { render, fireEvent } from "@testing-library/react";
import ErrorFallback from "./ErrorFallback";

describe("ErrorFallback", () => {
  const mockError = new Error("Something went wrong");
  const mockResetErrorBoundary = vi.fn();

  it("renders the error message", () => {
    const { getByText } = render(
      <ErrorFallback error={mockError} resetErrorBoundary={mockResetErrorBoundary} />
    );
    expect(getByText(mockError.message)).toBeInTheDocument();
  });

  it("calls the resetErrorBoundary function when the button is clicked", () => {
    const { getByLabelText } = render(
      <ErrorFallback error={mockError} resetErrorBoundary={mockResetErrorBoundary} />
    );
    fireEvent.click(getByLabelText("Go back"));
    expect(mockResetErrorBoundary).toHaveBeenCalled();
  });
});
