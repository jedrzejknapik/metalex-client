import { FC } from "react";
import { useLoaderData } from "react-router-dom";

import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import { Typography } from "antd";

import { ROUTES } from "@routes";

import { PageLayout } from "@layouts";

import { SubCategoryLoaderProps } from "./sub-category-loader";

import styles from "./sub-category.module.scss";

const staticBreadcrumbs: ItemType[] = [
  {
    title: "New order",
    href: "/new-order",
  },
];

export const SubCategory: FC = () => {
  const { href, name, parentCategory, imageRef } =
    useLoaderData() as SubCategoryLoaderProps;

  const breadcrumbs: ItemType[] = [
    ...staticBreadcrumbs,
    {
      title: parentCategory.title,
      href: ROUTES.NEW_CATEGORY(parentCategory.name),
    },
    {
      title: name,
      href,
    },
  ];

  return (
    <PageLayout title={name} breadcrumbs={breadcrumbs}>
      <Typography.Title level={4}>{name}</Typography.Title>
      <img src={imageRef} alt={name} className={styles.image} />
      <Typography.Title level={5}>
        Opis produktu albo formularz
      </Typography.Title>
    </PageLayout>
  );
};
