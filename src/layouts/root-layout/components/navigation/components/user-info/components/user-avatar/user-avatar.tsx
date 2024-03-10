import { FC } from "react";
import { Avatar } from "antd";

export const UserAvatar: FC = () => {
  return (
    <Avatar
      shape="circle"
      src="https://randomuser.me/api/portraits/women/72.jpg"
      alt="user avatar"
    />
  );
};
