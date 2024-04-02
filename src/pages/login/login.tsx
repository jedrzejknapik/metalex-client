import { FC } from "react";
import { Button, Form, Input } from "antd";
import { useLogin } from "./hooks/useLogin";

import { Metatag } from "@components/metatag/metatag";

import styles from "./login.module.scss";

export const Login: FC = () => {
  const [form] = Form.useForm();
  const { handleSubmit } = useLogin();

  return (
    <>
      <Metatag title="Metalex - Zaloguj się" />
      <div className={styles.container}>
        <Form
          onFinish={handleSubmit}
          className={styles.form}
          form={form}
          layout="vertical"
          labelAlign="left"
        >
          <Form.Item
            label="Login"
            name="username"
            required
            hasFeedback
            validateTrigger={["onBlur", "onChange"]}
            rules={[{ required: true }]}
          >
            <Input required name="username" />
          </Form.Item>
          <Form.Item
            label="Hasło"
            name="password"
            required
            hasFeedback
            validateTrigger={["onBlur", "onChange"]}
            rules={[{ required: true }]}
          >
            <Input required name="password" />
          </Form.Item>
          <Button type="primary" className={styles.button} htmlType="submit">
            Zaloguj
          </Button>
        </Form>
      </div>
    </>
  );
};
