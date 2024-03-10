import { FC } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import { Card, Typography } from "antd";

import { PageLayout } from "@layouts";

import { ItemAnimation, ListAnimation } from "@components/animation";

import { ROUTES } from "@routes";

import { CategoryLoaderProps } from "./category-loader";

import styles from "./category.module.scss";

const staticBreadcrumbs: ItemType[] = [
  {
    title: "New order",
    href: "/new-order",
  },
];

export const Category: FC = () => {
  const { categories, parentCaregory, title } =
    useLoaderData() as CategoryLoaderProps;

  const breadcrumbs: ItemType[] = [
    ...staticBreadcrumbs,
    {
      title,
      href: ROUTES.NEW_CATEGORY(parentCaregory),
    },
  ];

  return (
    <PageLayout title={title} breadcrumbs={breadcrumbs}>
      <Typography.Title level={4}>Wybierz kategorię</Typography.Title>
      <AnimatePresence initial>
        <ListAnimation containerClassName={styles.list}>
          {categories.map(({ id, href, imageRef, name }, index) => (
            <ItemAnimation key={id} delay={index * 0.1}>
              <Link to={href}>
                <Card
                  hoverable
                  cover={
                    <img src={imageRef} alt={name} className={styles.image} />
                  }
                >
                  <p>{name}</p>
                </Card>
              </Link>
            </ItemAnimation>
          ))}
        </ListAnimation>
      </AnimatePresence>
    </PageLayout>
  );
};
