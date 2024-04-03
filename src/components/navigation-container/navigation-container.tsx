import { FC, PropsWithChildren } from 'react';
import { Layout } from 'antd';
import cn from 'classnames';

import styles from './navigation-container.module.scss';

const { Header } = Layout;

interface NavigationContainerProps {
  className?: string;
}

export const NavigationContainer: FC<
  PropsWithChildren<NavigationContainerProps>
> = ({ children, className }) => {
  return (
    <Header className={cn(styles.header, className)}>
      <div className={styles.container}>{children}</div>
    </Header>
  );
};
