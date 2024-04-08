import { FC } from 'react';

import { useSideBarState } from '@layouts/protected-page/providers';

import styles from './logo.module.scss';

export const Logo: FC = () => {
  const { collapsed } = useSideBarState();

  return (
    <div className={styles.container}>
      <img src="/favicon.png" className={styles.favicon} />
      {!collapsed && <img src="/metalex-text.png" className={styles.text} />}
    </div>
  );
};
