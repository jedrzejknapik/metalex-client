import { FC } from "react";
import { Button, Popover } from "antd";
import { DownOutlined } from "@ant-design/icons";

import { UserOptions } from "./components";

export const MoreOptions: FC = () => {
  return (
    <Popover trigger="click" content={<UserOptions />} placement="bottomRight">
      <Button icon={<DownOutlined />} type="text" />
    </Popover>
  );
};
