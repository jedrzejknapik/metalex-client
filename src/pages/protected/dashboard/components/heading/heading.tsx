import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useI18nContext } from '@i18n/i18n-react';

import Typography from '@components/typography';
import { Button } from '@components/button/button';

import { PROTECTED_ROUTES } from '@routes';

import styles from './heading.module.scss';

export const Heading: FC = () => {
  const { LL } = useI18nContext();

  return (
    <div className={styles.container}>
      <Typography.Title level={3}>{LL.ORDER_LIST.HEADING()}</Typography.Title>
      <Link to={PROTECTED_ROUTES.ORDER.NEW_ORDER()}>
        <Button>{LL.ORDER_LIST.CREATE_ORDER()}</Button>
      </Link>
    </div>
  );
};
