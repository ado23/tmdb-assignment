import { FC } from "react";

import Social from "layout/footer/Social";
import styles from "layout/footer/style.module.scss";

const Footer: FC = () => (
  <>
    <div className={styles.text}>
      <span> Tmdb assigment @2024 </span>
    </div>
    <Social />
  </>
);

export default Footer;
