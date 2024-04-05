import { FC } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import { useI18nContext } from '@i18n/i18n-react';

import { NON_PROTECTED_ROUTES } from '@routes';

import styles from './forgot-password.module.scss';

export const ForgotPassword: FC = () => {
  const { LL } = useI18nContext();

  return (
    <Button className={styles.button}>
      <Link className={styles.link} to={NON_PROTECTED_ROUTES.FORGOT_PASSWORD()}>
        {LL.SIGN_IN.FORGOT_PASSWORD()}
      </Link>
    </Button>
  );
};
