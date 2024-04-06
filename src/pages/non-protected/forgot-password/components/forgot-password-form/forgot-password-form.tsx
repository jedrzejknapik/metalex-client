import { FC } from 'react';
import { Form } from 'antd';

import { SignIn, FormTitle, SubmitButton, UsernameInput } from './components';

import { useForgotPassword } from './hooks';

import styles from './forgot-password-form.module.scss';

export const ForgotPasswordForm: FC = () => {
  const [form] = Form.useForm();
  const { onSubmit } = useForgotPassword();

  return (
    <div className={styles.container}>
      <FormTitle />
      <Form onFinish={onSubmit} form={form} layout="vertical" labelAlign="left">
        <UsernameInput />
        <SubmitButton />
      </Form>
      <SignIn />
    </div>
  );
};
