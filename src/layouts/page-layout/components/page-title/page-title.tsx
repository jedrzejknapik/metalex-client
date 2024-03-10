import { FC } from "react";
import { Typography } from "antd";

import styles from "./page-title.module.scss";

export interface PageTitleProps {
  title: string;
}

export const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return (
    <Typography.Title level={3} className={styles.title}>
      {title}
    </Typography.Title>
  );
};
