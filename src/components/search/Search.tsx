import { ChangeEvent, FC } from "react";

import style from "components/search/style.module.scss";

interface ISearchProps {
  id: string;
  ariaLabel: string;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  value?: string;
  placeholder?: string;
  defaultValue?: string;
  autoComplete?: "on" | "off";
  ariaDescribedBy?: string;
}

const Search: FC<ISearchProps> = ({
  id,
  label,
  ariaLabel,
  handleOnChange,
  value,
  placeholder,
  defaultValue,
  ariaDescribedBy,
  autoComplete = "off"
}) => (
  <div className={style.container}>
    {label && <label htmlFor={id}>{label}</label>}
    <input
      id={id}
      aria-label={ariaLabel}
      type="search"
      inputMode="search"
      placeholder={placeholder}
      autoComplete={autoComplete}
      className={style["search"]}
      onChange={handleOnChange}
      value={value}
      defaultValue={defaultValue}
      aria-describedby={ariaDescribedBy}
    />
  </div>
);

export default Search;
