import { render } from "@testing-library/react";
import Icon from "components/icon/Icon";

describe("Icon Component", () => {
  it("renders icon with default values", () => {
    const { getByLabelText } = render(<Icon name="linkedin" />);
    const iconComponent = getByLabelText("icon-component");
    expect(iconComponent).toBeInTheDocument();
    expect(iconComponent).toHaveAttribute("viewBox", "0 0 24 24");
    expect(iconComponent).toHaveAttribute("height", "24px");
    expect(iconComponent).toHaveAttribute("width", "24px");
  });

  it("renders icon with custom viewBox, width, and height", () => {
    const { getByLabelText } = render(
      <Icon name="linkedin" viewBox="0 0 32 32" w="32px" h="32px" />
    );
    const iconComponent = getByLabelText("icon-component");
    expect(iconComponent).toBeInTheDocument();
    expect(iconComponent).toHaveAttribute("viewBox", "0 0 32 32");
    expect(iconComponent).toHaveAttribute("height", "32px");
    expect(iconComponent).toHaveAttribute("width", "32px");
  });

  it("generates correct spriteName based on name prop", () => {
    const { getByLabelText } = render(<Icon name="linkedin" />);
    const iconComponent = getByLabelText("icon-component");
    const useElement = iconComponent.querySelector("use");
    expect(useElement).toBeInTheDocument();

    expect(useElement).toHaveAttribute("href", expect.stringContaining("linkedin"));
  });

  it("renders icon with custom color", () => {
    const { getByLabelText } = render(<Icon name="linkedin" color="red" />);
    const iconComponent = getByLabelText("icon-component");
    expect(iconComponent).toHaveAttribute("color", "red");
  });
});
