import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import { Typography } from 'antd';
import { TextProps } from 'antd/es/typography/Text';

import styles from './text.module.scss';

export const Text: FC<PropsWithChildren<TextProps>> = (props) => {
  return (
    <Typography.Text {...props} className={cn(styles.text, props.className)}>
      {props.children}
    </Typography.Text>
  );
};
