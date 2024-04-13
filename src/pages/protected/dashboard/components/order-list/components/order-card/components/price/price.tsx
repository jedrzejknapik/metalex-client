import { FC } from 'react';

import { useSingleOrder } from '@providers/single-order/hooks';

import Typography from '@components/typography';

import styles from './price.module.scss';

const CURRENCY = 'PLN';

export const Price: FC = () => {
  const { price } = useSingleOrder();

  return (
    <Typography.Text className={styles.text}>
      {price} {CURRENCY}
    </Typography.Text>
  );
};
