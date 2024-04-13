import { FC } from 'react';
import cn from 'classnames';
import { Card as ANTCard, CardProps } from 'antd';

import styles from './card.module.scss';

export const Card: FC<CardProps> = (props) => {
  return (
    <ANTCard
      {...props}
      className={cn(styles.card, props.className)}
      classNames={{ body: styles.body, ...props.classNames }}
    >
      {props.children}
    </ANTCard>
  );
};
