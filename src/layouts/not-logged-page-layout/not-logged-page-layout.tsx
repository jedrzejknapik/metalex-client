import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import { Navigation } from './components';

import styles from './not-logged-page-layout.module.scss';

interface NotLoggedPageLayoutProps {
  className?: string;
}

export const NotLoggedPageLayout: FC<
  PropsWithChildren<NotLoggedPageLayoutProps>
> = ({ children, className }) => {
  return (
    <div className={cn(styles.container, className)}>
      <Navigation />
      {children}
    </div>
  );
};
