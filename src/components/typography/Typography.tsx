import { FC } from "react";

import style from "components/typography/style.module.scss";

enum TextVariants {
  text = "p",
  title = "h1",
  subtitle = "h2",
  label = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6"
}

export interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
  variant: keyof typeof TextVariants;
  children: React.ReactNode;
  type?: "primary" | "secondary" | "tertiary";
  truncate?: boolean;
}

const Typography: FC<TypographyProps> = ({
  variant,
  children,
  type = "primary",
  truncate = false,
  ...rest
}) => {
  const Component = TextVariants[variant];

  return (
    <Component
      className={`${style["typography"]} ${truncate && style["truncate"]} ${style[`${variant}`]} ${style[`${type}`]}`}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Typography;
