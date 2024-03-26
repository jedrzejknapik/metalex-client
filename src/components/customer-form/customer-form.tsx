import { Button, Form, Radio } from "antd";
import { FC, useState } from "react";

import styles from "./customer-form.module.scss";
import {
  AddressData,
  CompanyData,
  ContactData,
  PersonalData,
} from "./components";
import { VALIDATION_MESSAGES } from "./constants";

type CustomerType = "individual" | "company";

type FormValues = {
  customerType: CustomerType;
};

export const CustomerForm: FC = () => {
  const [form] = Form.useForm();
  const [customerType, setCustomerType] = useState<CustomerType>("company");

  const onCustomerTypeChange = ({ customerType }: FormValues) => {
    setCustomerType(customerType);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      labelAlign="left"
      initialValues={{ customerType }}
      onValuesChange={onCustomerTypeChange}
      validateMessages={VALIDATION_MESSAGES}
    >
      <div className={styles.container}>
        <Form.Item name="customerType">
          <Radio.Group value={customerType}>
            <Radio.Button value="individual">Klient indywidualny</Radio.Button>
            <Radio.Button value="company">Klient firmowy</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <PersonalData />
        <AddressData />
        <ContactData />
        {customerType === "company" && <CompanyData />}
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </div>
    </Form>
  );
};
