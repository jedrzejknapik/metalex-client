import { FC } from "react";
import { Button } from "antd";

import styles from "./logo.module.scss";

export const Logo: FC = () => {
  return (
    <Button type="link" className={styles.button}>
      <img
        src="https://blachymetalex.pl/user_files/images/logo.png"
        className={styles.image}
      />
    </Button>
  );
};
