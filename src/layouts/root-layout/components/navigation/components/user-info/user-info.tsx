import { FC } from "react";
import { Flex } from "antd";

import { MoreOptions, UserAvatar, UserName } from "./components";

export const UserInfo: FC = () => {
  return (
    <Flex gap="small" align="center">
      <UserAvatar />
      <UserName />
      <MoreOptions />
    </Flex>
  );
};
