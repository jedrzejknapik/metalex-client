import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';

import { useStepper } from '@pages/protected/order/new-order/providers';

import { Button } from '@components/button/button';

import { useSubmitForm } from './hooks';

import styles from './actions.module.scss';

export const Actions: FC = () => {
  const { onClickPrev } = useStepper();
  const { LL } = useI18nContext();
  const { onSubmit, isSubmitDisabled } = useSubmitForm();

  return (
    <div className={styles.container}>
      <Button onClick={onClickPrev} className={styles.button}>
        {LL.ORDER.NEW_ORDER.SUMMARY.PREVIOUS()}
      </Button>
      <Button
        onClick={onSubmit}
        className={styles.button}
        disabled={isSubmitDisabled}
      >
        {LL.ORDER.NEW_ORDER.SUMMARY.SUBMIT()}
      </Button>
    </div>
  );
};
