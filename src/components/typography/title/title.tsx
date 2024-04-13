import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import { Typography } from 'antd';
import { TitleProps } from 'antd/es/typography/Title';

import styles from './title.module.scss';

export const Title: FC<PropsWithChildren<TitleProps>> = (props) => {
  return (
    <Typography.Title
      {...props}
      className={cn(styles.title, props.className, {
        [styles.level1]: props.level === 1,
        [styles.level2]: props.level === 2,
        [styles.level3]: props.level === 3,
        [styles.level4]: props.level === 4,
      })}
    >
      {props.children}
    </Typography.Title>
  );
};
