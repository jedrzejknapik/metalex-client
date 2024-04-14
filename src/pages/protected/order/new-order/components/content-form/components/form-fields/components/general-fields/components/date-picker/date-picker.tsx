import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';

import { Rule } from 'antd/es/form';

import { FormDatePicker, FormItem } from '@forms';

import { CreateOrderFormFields } from '@types';

export const DatePicker: FC = () => {
  const { LL } = useI18nContext();

  const rules: Rule[] = [
    {
      required: true,
      message:
        LL.ORDER.NEW_ORDER.FILL_THE_FORM.FIELDS.DATE.VALIDATION.REQUIRED(),
    },
  ];

  return (
    <FormItem
      label={LL.ORDER.NEW_ORDER.FILL_THE_FORM.FIELDS.DATE.LABEL()}
      name={CreateOrderFormFields.CREATED_AT}
      required
      hasFeedback
      validateTrigger={['onBlur', 'onChange']}
      rules={rules}
    >
      <FormDatePicker
        required
        name={CreateOrderFormFields.CREATED_AT}
        placeholder={LL.ORDER.NEW_ORDER.FILL_THE_FORM.FIELDS.DATE.PLACEHOLDER()}
      />
    </FormItem>
  );
};
