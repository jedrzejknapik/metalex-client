import { FC } from 'react';
import { Layout } from 'antd';

import { CollapseButton, Menu } from './components';

import { useSideBarState } from '@layouts/protected-page/providers';

import styles from './side-bar.module.scss';

export const SideBar: FC = () => {
  const { collapsed } = useSideBarState();

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
