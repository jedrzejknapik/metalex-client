import { FC } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import { Logo, Navigation, SideMenu } from "./components";

import styles from "./root-layout.module.scss";

const { Content, Sider } = Layout;

export const RootLayout: FC = () => {
  return (
    <Layout className={styles.container}>
      <Sider>
        <Logo />
        <SideMenu />
      </Sider>
      <Layout className={styles.content}>
        <Navigation />
        <Content className={styles.main}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
