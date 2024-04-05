import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';
import { Rule } from 'antd/es/form';

import { FormInput, FormItem } from '@forms';

import { ForgotPasswordFormFields } from '@types';

export const UsernameInput: FC = () => {
  const { LL } = useI18nContext();

  const rules: Rule[] = [
    {
      required: true,
      message: LL.FORGOT_PASSWORD.FORM.USERNAME.VALIDATION.REQUIRED(),
    },
  ];

  return (
    <FormItem
      label={LL.FORGOT_PASSWORD.FORM.USERNAME.LABEL()}
      name={ForgotPasswordFormFields.USERNAME}
      required
      hasFeedback
      validateTrigger={['onBlur', 'onChange']}
      rules={rules}
    >
      <FormInput required name={ForgotPasswordFormFields.USERNAME} />
    </FormItem>
  );
};
