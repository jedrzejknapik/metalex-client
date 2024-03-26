import { Card, Col, Form, Input, Row } from "antd";
import { FC } from "react";

export const PersonalData: FC = () => {
  return (
    <Card size="small" title="Dane osobowe">
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            label="Imię"
            name="name"
            required
            hasFeedback
            validateTrigger={["onBlur", "onChange"]}
            rules={[{ required: true }]}
          >
            <Input required name="name" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Nazwisko"
            name="lastname"
            required
            hasFeedback
            validateTrigger={["onBlur", "onChange"]}
            rules={[{ required: true }]}
          >
            <Input required name="lastname" />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
};
