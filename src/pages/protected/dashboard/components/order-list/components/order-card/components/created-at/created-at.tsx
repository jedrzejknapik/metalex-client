import { FC } from 'react';

import { useSingleOrder } from '@providers/single-order/hooks';

import Typography from '@components/typography';

import styles from './created-at.module.scss';

export const CreatedAt: FC = () => {
  const { createdAt } = useSingleOrder();

  return <Typography.Text className={styles.date}>{createdAt}</Typography.Text>;
};
