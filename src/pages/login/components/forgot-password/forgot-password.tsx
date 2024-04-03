import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Typography } from 'antd';

import { ROUTES } from '@routes';

import styles from './forgot-password.module.scss';

export const ForgotPassword: FC = () => {
  const { t } = useTranslation();

  return (
    <Button htmlType="button" className={styles.button}>
      <Typography.Link className={styles.link} href={ROUTES.FORGOT_PASSWORD()}>
        {t('login.form.forgotPassword')}
      </Typography.Link>
    </Button>
  );
};
