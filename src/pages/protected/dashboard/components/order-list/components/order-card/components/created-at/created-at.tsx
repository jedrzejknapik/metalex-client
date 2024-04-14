import { FC } from 'react';

import { useSingleOrder } from '@providers/single-order/hooks';

import Typography from '@components/typography';

import { getReadableDateFormat } from '@utils/get-readable-date-format';

import styles from './created-at.module.scss';

export const CreatedAt: FC = () => {
  const { createdAt } = useSingleOrder();

  const date = getReadableDateFormat(createdAt);

  return <Typography.Text className={styles.date}>{date}</Typography.Text>;
};
