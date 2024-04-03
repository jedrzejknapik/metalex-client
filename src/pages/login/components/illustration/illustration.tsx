import { FC } from 'react';

import SvgLoginImage from '@images/login-image';

import styles from './illustration.module.scss';

export const Illustration: FC = () => {
  return <SvgLoginImage className={styles.image} />;
};
