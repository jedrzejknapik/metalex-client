import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';
import { Form } from 'antd';

import { Button } from '@components/button/button';

import {
  useOrderForm,
  useStepper,
} from '@pages/protected/order/new-order/providers';

import { CreateOrderFormFields } from '@types';

import styles from './next-button.module.scss';

export const NextButton: FC = () => {
  const { onClickNext } = useStepper();
  const { form } = useOrderForm();
  const { LL } = useI18nContext();
  const selectedProfile = Form.useWatch(CreateOrderFormFields.PROFILE_ID, form);

  return (
    <div className={styles.container}>
      <Button
        onClick={onClickNext}
        className={styles.button}
        disabled={!selectedProfile}
      >
        {LL.ORDER.NEW_ORDER.CHOOSE_PROFILE.NEXT()}
      </Button>
    </div>
  );
};
