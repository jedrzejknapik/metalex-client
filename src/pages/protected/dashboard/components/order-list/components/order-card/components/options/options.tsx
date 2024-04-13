import { FC } from 'react';

import { EditButton, ViewButton } from './components';

import styles from './options.module.scss';

export const Options: FC = () => {
  return (
    <div className={styles.container}>
      <ViewButton />
      <EditButton />
    </div>
  );
};
