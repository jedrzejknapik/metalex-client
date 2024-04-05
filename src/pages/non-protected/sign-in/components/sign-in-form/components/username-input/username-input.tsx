import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';
import { Rule } from 'antd/es/form';

import { FormInput, FormItem } from '@forms';

import { SignInFormFields } from '@types';

export const UsernameInput: FC = () => {
  const { LL } = useI18nContext();

  const rules: Rule[] = [
    {
      required: true,
      message: LL.SIGN_IN.FORM.USERNAME.VALIDATION.REQUIRED(),
    },
  ];

  return (
    <FormItem
      label={LL.SIGN_IN.FORM.USERNAME.LABEL()}
      name={SignInFormFields.USERNAME}
      required
      hasFeedback
      validateTrigger={['onBlur', 'onChange']}
      rules={rules}
    >
      <FormInput required name={SignInFormFields.USERNAME} />
    </FormItem>
  );
};
