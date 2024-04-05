import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';

import { Button } from '@components/button/button';

import styles from './submit-button.module.scss';

export const SubmitButton: FC = () => {
  const { LL } = useI18nContext();

  return (
    <Button htmlType="submit" className={styles.button}>
      {LL.SIGN_IN.FORM.SUBMIT()}
    </Button>
  );
};
