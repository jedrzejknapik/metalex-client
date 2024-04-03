import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Typography } from 'antd';

import styles from './form-title.module.scss';

export const FormTitle: FC = () => {
  const { t } = useTranslation();

  return (
    <Typography.Title level={3} className={styles.title}>
      {t('login.form.title')}
    </Typography.Title>
  );
};
