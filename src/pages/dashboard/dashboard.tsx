import { FC } from "react";

import { PageLayout } from "@layouts";
import { Typography } from "antd";
import { CustomerForm } from "@components/customer-form";

export const Dashboard: FC = () => {
  return (
    <PageLayout title="Dashboard">
      <Typography.Title level={4}>Formularz</Typography.Title>
      <CustomerForm />
    </PageLayout>
  );
};
