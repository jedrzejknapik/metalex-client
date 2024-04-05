import { FC } from 'react';

import SvgSignInImage from '@images/sign-in-image';

import styles from './sign-in-image.module.scss';

export const SignInImage: FC = () => {
  return <SvgSignInImage className={styles.image} />;
};
