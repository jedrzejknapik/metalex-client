import { FC } from "react";

import { PageLayout } from "@layouts";
import { Typography } from "antd";

export const Dashboard: FC = () => {
  return (
    <PageLayout title="Dashboard">
      <Typography.Title level={4}>Oferta</Typography.Title>
    </PageLayout>
  );
};
