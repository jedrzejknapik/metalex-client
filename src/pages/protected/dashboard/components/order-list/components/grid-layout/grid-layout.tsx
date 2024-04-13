import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './grid-layout.module.scss';

interface GridLayoutProps {
  className?: string;
}

export const GridLayout: FC<PropsWithChildren<GridLayoutProps>> = ({
  children,
  className,
}) => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};
