import { FC } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import { useI18nContext } from '@i18n/i18n-react';

import { NON_PROTECTED_ROUTES } from '@routes';

import styles from './sign-in.module.scss';

export const SignIn: FC = () => {
  const { LL } = useI18nContext();

  return (
    <Button className={styles.button}>
      <Link className={styles.link} to={NON_PROTECTED_ROUTES.SIGN_IN()}>
        {LL.FORGOT_PASSWORD.SIGN_IN()}
      </Link>
    </Button>
  );
};
