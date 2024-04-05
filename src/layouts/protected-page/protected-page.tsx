import { FC, PropsWithChildren } from 'react';

import { PageLoader } from '@components/page-loader/page-loader';

import { Navigation } from './components';

import styles from './protected-page.module.scss';

export const ProtectedPage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <Navigation />
        <div className={styles.content}>{children}</div>
      </div>
      <PageLoader />
    </>
  );
};
