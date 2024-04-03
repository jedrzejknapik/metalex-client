import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';

import styles from './submit-button.module.scss';

export const SubmitButton: FC = () => {
  const { t } = useTranslation();

  return (
    <Button className={styles.button} htmlType="submit">
      {t('login.form.submit')}
    </Button>
  );
};
