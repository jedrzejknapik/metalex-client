import { Card, Form, Input } from "antd";
import { FC } from "react";

export const CompanyData: FC = () => {
  return (
    <Card size="small" title="Dane firmy">
      <Form.Item label="NIP" required>
        <Input />
      </Form.Item>
      <Form.Item label="Nazwa Firmy" required>
        <Input />
      </Form.Item>
    </Card>
  );
};
