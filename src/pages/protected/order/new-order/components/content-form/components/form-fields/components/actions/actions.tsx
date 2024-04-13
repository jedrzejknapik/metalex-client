import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';

import {
  useOrderForm,
  useStepper,
} from '@pages/protected/order/new-order/providers';

import { Button } from '@components/button/button';

import styles from './actions.module.scss';

export const Actions: FC = () => {
  const { form } = useOrderForm();
  const { onClickNext, onClickPrev } = useStepper();
  const { LL } = useI18nContext();

  const checkFormFields = async () => {
    try {
      await form.validateFields();
      onClickNext();
    } catch (e) {
      return;
    }
  };

  return (
    <div className={styles.container}>
      <Button onClick={onClickPrev} className={styles.button}>
        {LL.ORDER.NEW_ORDER.FILL_THE_FORM.PREVIOUS()}
      </Button>
      <Button onClick={checkFormFields} className={styles.button}>
        {LL.ORDER.NEW_ORDER.FILL_THE_FORM.NEXT()}
      </Button>
    </div>
  );
};
