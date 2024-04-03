import { FC } from 'react';
import { Form } from 'antd';

import { useLogin } from './hooks';

import { LoginInput, PasswordInput, SubmitButton } from './components';

import styles from './login-form.module.scss';

export const LoginForm: FC = () => {
  const [form] = Form.useForm();
  const { handleSubmit } = useLogin();

  return (
    <Form
      onFinish={handleSubmit}
      className={styles.form}
      form={form}
      layout="vertical"
      labelAlign="left"
    >
      <LoginInput />
      <PasswordInput />
      <SubmitButton />
    </Form>
  );
};
