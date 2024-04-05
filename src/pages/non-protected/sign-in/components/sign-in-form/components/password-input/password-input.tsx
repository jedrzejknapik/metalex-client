import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';
import { Rule } from 'antd/es/form';

import { FormPassword, FormItem } from '@forms';

import { SignInFormFields } from '@types';

export const PasswordInput: FC = () => {
  const { LL } = useI18nContext();

  const rules: Rule[] = [
    {
      required: true,
      message: LL.SIGN_IN.FORM.PASSWORD.VALIDATION.REQUIRED(),
    },
  ];

  return (
    <FormItem
      label={LL.SIGN_IN.FORM.PASSWORD.LABEL()}
      name={SignInFormFields.PASSWORD}
      required
      hasFeedback
      validateTrigger={['onBlur', 'onChange']}
      rules={rules}
    >
      <FormPassword name={SignInFormFields.PASSWORD} />
    </FormItem>
  );
};
