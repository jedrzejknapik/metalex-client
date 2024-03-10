import { FC } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Typography, Card } from "antd";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";

import { PageLayout } from "@layouts";

import { ItemAnimation, ListAnimation } from "@components/animation";

import { NewOrderLoaderProps } from "./new-order-loader";

import styles from "./new-order.module.scss";

const breadcrumbs: ItemType[] = [
  {
    title: "New order",
    href: "/new-order",
  },
];

export const NewOrder: FC = () => {
  const { categories } = useLoaderData() as NewOrderLoaderProps;

  return (
    <PageLayout title="New order" breadcrumbs={breadcrumbs}>
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
