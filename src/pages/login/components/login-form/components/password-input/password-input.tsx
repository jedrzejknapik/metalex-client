import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { FormItem, FormPassword } from '@components/forms';

import { LoginFormFields } from '@types';

export const PasswordInput: FC = () => {
  const { t } = useTranslation();

  return (
    <FormItem
      label={t('login.form.password')}
      name={LoginFormFields.PASSWORD}
      required
      hasFeedback
      validateTrigger={['onBlur', 'onChange']}
      rules={[
        {
          required: true,
          message: t('login.form.passwordValidation.required'),
        },
      ]}
    >
      <FormPassword name={LoginFormFields.PASSWORD} />
    </FormItem>
  );
};
