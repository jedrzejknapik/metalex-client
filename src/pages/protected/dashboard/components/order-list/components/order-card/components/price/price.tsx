import { FC } from 'react';

import { useSingleOrder } from '@providers/single-order/hooks';

import Typography from '@components/typography';

import { CURRENCY } from '@utils/app-settings';

import styles from './price.module.scss';

export const Price: FC = () => {
  const { price } = useSingleOrder();

  return (
    <Typography.Text className={styles.text}>
      {price} {CURRENCY}
    </Typography.Text>
  );
};
