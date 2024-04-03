import { FC } from 'react';

import styles from './logo.module.scss';

export const Logo: FC = () => {
  return <img src="/metalex-logo.png" alt="Metalex" className={styles.image} />;
};
