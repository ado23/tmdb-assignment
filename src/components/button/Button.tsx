import { FC } from "react";

import style from "components/button/style.module.scss";

type ButtonSize = "sm" | "md" | "lg";
type ButtonType = "button" | "submit" | "reset";
export type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  id: string;
  onClick: () => void;
  text: string;
  label?: string;
  ariaLabel?: string;
  disabled?: boolean;
  ariaDescribedBy?: string;
  size?: ButtonSize;
  type?: ButtonType;
  variant?: ButtonVariant;
};

const Button: FC<ButtonProps> = ({
  id,
  text,
  label,
  onClick,
  disabled,
  ariaDescribedBy,
  ariaLabel,
  size = "md",
  type = "button",
  variant = "primary"
}) => (
  <>
    {label && <label htmlFor={id}>{label}</label>}
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={`${style["button"]} ${style[`${variant}`]} ${style[`${size}`]}`}
    >
      {text}
    </button>
  </>
);

export default Button;
