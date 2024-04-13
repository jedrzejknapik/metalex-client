import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';

import { Rule } from 'antd/es/form';

import { FormItem, FormSelect } from '@forms';

import { CreateOrderFormFields } from '@types';

import { useSelectOptions } from './hooks';

export const CustomerSelect: FC = () => {
  const { LL } = useI18nContext();
  const { options } = useSelectOptions();

  const rules: Rule[] = [
    {
      required: true,
      message:
        LL.ORDER.NEW_ORDER.FILL_THE_FORM.FIELDS.CUSTOMER.VALIDATION.REQUIRED(),
    },
  ];

  return (
    <FormItem
      label={LL.ORDER.NEW_ORDER.FILL_THE_FORM.FIELDS.CUSTOMER.LABEL()}
      name={CreateOrderFormFields.CUSTOMER_ID}
      required
      hasFeedback
      validateTrigger={['onBlur', 'onChange']}
      rules={rules}
    >
      <FormSelect options={options} />
    </FormItem>
  );
};
