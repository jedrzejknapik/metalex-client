import { FC } from "react";
import { Typography } from "antd";

import styles from "./user-name.module.scss";

export const UserName: FC = () => {
  return <Typography.Text className={styles.name}>Lorem Ipsum</Typography.Text>;
};
