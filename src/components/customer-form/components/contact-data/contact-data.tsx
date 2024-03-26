import { Card, Form, Input } from "antd";
import { FC } from "react";

export const ContactData: FC = () => {
  return (
    <Card size="small" title="Kontakt">
      <Form.Item label="E-mail">
        <Input />
      </Form.Item>
      <Form.Item label="Telefon" required>
        <Input />
      </Form.Item>
    </Card>
  );
};
