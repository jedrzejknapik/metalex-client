import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';

import { Rule } from 'antd/es/form';

import { FormInput, FormItem } from '@forms';

import { CreateOrderFormFields } from '@types';

export const OrderNrInput: FC = () => {
  const { LL } = useI18nContext();

  const rules: Rule[] = [
    {
      required: true,
      message:
        LL.ORDER.NEW_ORDER.FILL_THE_FORM.FIELDS.ORDER_NR.VALIDATION.REQUIRED(),
    },
  ];

  return (
    <FormItem
      label={LL.ORDER.NEW_ORDER.FILL_THE_FORM.FIELDS.ORDER_NR.LABEL()}
      name={CreateOrderFormFields.ORDER_NR}
      required
      hasFeedback
      validateTrigger={['onBlur', 'onChange']}
      rules={rules}
    >
      <FormInput required name={CreateOrderFormFields.ORDER_NR} />
    </FormItem>
  );
};
