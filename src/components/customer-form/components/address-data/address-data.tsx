import { Card, Col, Form, Input, Row } from "antd";
import { FC } from "react";

export const AddressData: FC = () => {
  return (
    <Card size="small" title="Dane adresowe">
      <Row>
        <Col span={24}>
          <Form.Item
            label="Adres"
            name="address"
            required
            hasFeedback
            validateTrigger={["onBlur", "onChange"]}
            rules={[{ required: true }]}
          >
            <Input required name="address" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            label="Kod pocztowy"
            name="postal-code"
            required
            hasFeedback
            validateTrigger={["onBlur", "onChange"]}
            rules={[{ required: true }]}
          >
            <Input name="postal-code" required />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Miejscowość"
            name="city"
            required
            hasFeedback
            validateTrigger={["onBlur", "onChange"]}
            rules={[{ required: true }]}
          >
            <Input name="city" required />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
};
