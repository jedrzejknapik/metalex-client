import { FC, PropsWithChildren } from 'react';
import { Layout } from 'antd';
import cn from 'classnames';

import styles from './header.module.scss';

interface HeaderProps {
  className?: string;
}

export const Header: FC<PropsWithChildren<HeaderProps>> = ({
  children,
  className,
}) => {
  return (
    <Layout.Header className={cn(styles.header, className)}>
      <div className={styles.container}>{children}</div>
    </Layout.Header>
  );
};
