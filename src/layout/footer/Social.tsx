import { FC } from "react";

import { Icon } from "components/index";
import styles from "layout/footer/style.module.scss";

const Social: FC = () => (
  <div className={styles.social}>
    <div className={styles.footerItem}>
      <a href="https://github.com/ado23" target="_blank" rel="noreferrer">
        <Icon name="github" fillColor="white" />
      </a>
    </div>

    <div className={styles.footerItem}>
      <a
        href="https://ba.linkedin.com/in/admir-%C4%87ejvanovi%C4%87"
        target="_blank"
        rel="noreferrer"
      >
        <Icon name="linkedin" fillColor="white" />
      </a>
    </div>
  </div>
);

export default Social;
