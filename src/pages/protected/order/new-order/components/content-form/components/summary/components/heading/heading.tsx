import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';

import Typography from '@components/typography';

import styles from './heading.module.scss';

export const Heading: FC = () => {
  const { LL } = useI18nContext();

  return (
    <Typography.Title level={2} className={styles.summary}>
      {LL.ORDER.NEW_ORDER.SUMMARY.HEADING()}
    </Typography.Title>
  );
};
