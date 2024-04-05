import { FC } from 'react';
import { Button as ANTDButton, ButtonProps } from 'antd';
import cn from 'classnames';

import styles from './button.module.scss';

export const Button: FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <ANTDButton {...rest} className={cn(styles.button, className)}>
      {children}
    </ANTDButton>
  );
};
