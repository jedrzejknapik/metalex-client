import { FC } from "react";
import { Flex, Layout } from "antd";

import { Notifications, UserInfo } from "./components";

import styles from "./navigation.module.scss";

const { Header } = Layout;

export const Navigation: FC = () => {
  return (
    <Header className={styles.header}>
      <div className={styles.container}>
        <Flex gap="small" align="center" className={styles.information}>
          <Notifications />
          <UserInfo />
        </Flex>
      </div>
    </Header>
  );
};
