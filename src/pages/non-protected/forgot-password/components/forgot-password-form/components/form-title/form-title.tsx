import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';

import { Typography } from 'antd';

import styles from './form-title.module.scss';

export const FormTitle: FC = () => {
  const { LL } = useI18nContext();

  return (
    <Typography.Title level={3} className={styles.title}>
      {LL.FORGOT_PASSWORD.FORM.TITLE()}
    </Typography.Title>
  );
};
