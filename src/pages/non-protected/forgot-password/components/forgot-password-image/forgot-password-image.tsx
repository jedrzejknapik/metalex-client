import { FC } from 'react';

import SvgForgotPasswordImage from '@images/forgot-password-image';

import styles from './forgot-password-image.module.scss';

export const ForgotPasswordImage: FC = () => {
  return <SvgForgotPasswordImage className={styles.image} />;
};
