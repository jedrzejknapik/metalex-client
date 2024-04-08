import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useI18nContext } from '@i18n/i18n-react';

import Typography from '@components/typography';
import { Button } from '@components/button/button';

import { useAuth } from '@providers/auth/hooks';

import { PROTECTED_ROUTES, NON_PROTECTED_ROUTES } from '@routes';

import styles from './not-found-message.module.scss';

export const NotFoundMessage: FC = () => {
  const { LL } = useI18nContext();
  const { isAuthenticated } = useAuth();

  const href = isAuthenticated
    ? PROTECTED_ROUTES.DASHBOARD()
    : NON_PROTECTED_ROUTES.SIGN_IN();

  return (
    <div className={styles.container}>
      <Typography.Title level={3} className={styles.title}>
        {LL.NOT_FOUND.MESSAGE()}
      </Typography.Title>
      <Link to={href}>
        <Button className={styles.button}>
          {LL.NOT_FOUND.BUTTON_MESSAGE()}
        </Button>
      </Link>
    </div>
  );
};
