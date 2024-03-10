import { FC } from "react";
import { Breadcrumb } from "antd";

import { ItemType } from "antd/es/breadcrumb/Breadcrumb";

import { ROUTES } from "@routes";

export interface BreadcrumbsProps {
  breadcrumbs: ItemType[];
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  const initialBreadcrumb: ItemType = {
    title: "Dashboard",
    href: ROUTES.DASHBOARD(),
  };

  return <Breadcrumb items={[initialBreadcrumb, ...breadcrumbs]} />;
};
