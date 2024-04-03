import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { FormInput, FormItem } from '@components/forms';

import { LoginFormFields } from '@types';

export const LoginInput: FC = () => {
  const { t } = useTranslation();

  return (
    <FormItem
      label={t('login.form.login')}
      name={LoginFormFields.USERNAME}
      required
      hasFeedback
      validateTrigger={['onBlur', 'onChange']}
      rules={[
        { required: true, message: t('login.form.loginValidation.required') },
      ]}
    >
      <FormInput required name={LoginFormFields.USERNAME} />
    </FormItem>
  );
};
