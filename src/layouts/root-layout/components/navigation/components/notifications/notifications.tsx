import { FC } from "react";
import { BellOutlined } from "@ant-design/icons";
import { Button } from "antd";

export const Notifications: FC = () => {
  return <Button icon={<BellOutlined />} type="text" />;
};
