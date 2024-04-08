import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';

import Typography from '@components/typography';

import styles from './form-title.module.scss';

export const FormTitle: FC = () => {
  const { LL } = useI18nContext();

  return (
    <Typography.Title level={3} className={styles.title}>
      {LL.SIGN_IN.FORM.TITLE()}
    </Typography.Title>
  );
};
