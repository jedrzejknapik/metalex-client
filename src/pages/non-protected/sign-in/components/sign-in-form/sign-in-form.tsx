import { FC } from 'react';
import { Form } from 'antd';

import { useAuth } from '@providers/auth/hooks';

import {
  ForgotPassword,
  FormTitle,
  PasswordInput,
  SubmitButton,
  UsernameInput,
} from './components';

import styles from './sign-in-form.module.scss';

export const SignInForm: FC = () => {
  const [form] = Form.useForm();
  const { onSingInUser } = useAuth();

  return (
    <div className={styles.container}>
      <FormTitle />
      <Form
        onFinish={onSingInUser}
        form={form}
        layout="vertical"
        labelAlign="left"
      >
        <UsernameInput />
        <PasswordInput />
        <SubmitButton />
      </Form>
      <ForgotPassword />
    </div>
  );
};
