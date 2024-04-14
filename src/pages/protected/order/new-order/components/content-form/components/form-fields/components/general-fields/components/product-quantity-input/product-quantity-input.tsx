import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';

import { FormItem, FormNumber } from '@forms';

import { Rule } from 'antd/es/form';

import { CreateOrderFormFields } from '@types';

import styles from './product-quantity-input.module.scss';

export const ProductQuantityInput: FC = () => {
  const { LL } = useI18nContext();

  const rules: Rule[] = [
    {
      required: true,
      message:
        LL.ORDER.NEW_ORDER.FILL_THE_FORM.FIELDS.PRODUCT_QUANTITY.VALIDATION.REQUIRED(),
    },
  ];

  return (
    <FormItem
      label={LL.ORDER.NEW_ORDER.FILL_THE_FORM.FIELDS.PRODUCT_QUANTITY.LABEL()}
      name={CreateOrderFormFields.PRODUCTS_QUANTITY}
      required
      hasFeedback
      validateTrigger={['onBlur', 'onChange']}
      rules={rules}
    >
      <FormNumber className={styles.input} />
    </FormItem>
  );
};
