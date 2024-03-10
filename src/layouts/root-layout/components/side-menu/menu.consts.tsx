import { ReactNode } from "react";

import { HomeOutlined, PlusSquareOutlined } from "@ant-design/icons";

interface MenuLink {
  key: string;
  href: string;
  icon: ReactNode;
  title: string;
}

export const MENU_ITEMS: MenuLink[] = [
  {
    key: "dashboard",
    href: "/dashboard",
    title: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    key: "new-order",
    href: "/new-order",
    title: "New order",
    icon: <PlusSquareOutlined />,
  },
];
