import { FC, PropsWithChildren, ReactNode } from 'react';
import { Layout } from 'antd';

import { Metatag } from '@components/metatag/metatag';
import Typography from '@components/typography';

import styles from './page-content.module.scss';

const { Content } = Layout;

interface PageContentProps {
  metaTitle: string;
  heading: ReactNode;
}

export const PageContent: FC<PropsWithChildren<PageContentProps>> = ({
  metaTitle,
  heading,
  children,
}) => {
  return (
    <>
      <Metatag title={metaTitle} />
      <div className={styles.wrapper}>
        <Typography.Title level={1}>{heading}</Typography.Title>
        <Layout className={styles.content}>
          <Content>{children}</Content>
        </Layout>
      </div>
    </>
  );
};
