import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';

import { FormItem, FormNumber } from '@forms';

import { Rule } from 'antd/es/form';

import { CreateOrderFormFields } from '@types';

import { CURRENCY } from '@utils/app-settings';

import styles from './price-input.module.scss';

export const PriceInput: FC = () => {
  const { LL } = useI18nContext();

  const rules: Rule[] = [
    {
      required: true,
      message:
        LL.ORDER.NEW_ORDER.FILL_THE_FORM.FIELDS.PRICE.VALIDATION.REQUIRED(),
    },
  ];

  return (
    <FormItem
      label={LL.ORDER.NEW_ORDER.FILL_THE_FORM.FIELDS.PRICE.LABEL()}
      name={CreateOrderFormFields.PRICE}
      required
      hasFeedback
      validateTrigger={['onBlur', 'onChange']}
      rules={rules}
    >
      <FormNumber className={styles.input} addonAfter={CURRENCY} />
    </FormItem>
  );
};
