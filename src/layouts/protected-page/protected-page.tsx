import { FC, PropsWithChildren } from 'react';
import { Layout } from 'antd';

import { PageLoader } from '@components/page-loader/page-loader';

import { Navigation, SideBar } from './components';

import { SideBarStateProvider } from './providers/side-bar-state/side-bar-state-provider';

import styles from './protected-page.module.scss';

export const ProtectedPage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Layout className={styles.container}>
        <SideBarStateProvider>
          <SideBar />
        </SideBarStateProvider>
        <Navigation />
        {children}
      </Layout>
      <PageLoader />
    </>
  );
};
