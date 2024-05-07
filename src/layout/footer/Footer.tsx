import { FC } from "react";

import { Typography } from "components/index";
import Social from "layout/footer/Social";
import styles from "layout/footer/style.module.scss";

const Footer: FC = () => (
  <>
    <div className={styles.text}>
      <Typography variant="text"> © 2024 All rights reserved </Typography>
    </div>
    <Social />
  </>
);

export default Footer;
