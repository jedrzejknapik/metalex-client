import { FC } from 'react';
import { Layout } from 'antd';

import { useSideBar } from '@layouts/protected-page/providers';

import { CollapseButton, Menu } from './components';

import styles from './side-bar.module.scss';

export const SideBar: FC = () => {
  const { collapsed } = useSideBar();

  return (
    <Layout.Sider
      className={styles.sideBar}
      collapsible
      collapsed={collapsed}
      trigger={null}
    >
      <CollapseButton />
      <Menu />
    </Layout.Sider>
  );
};
