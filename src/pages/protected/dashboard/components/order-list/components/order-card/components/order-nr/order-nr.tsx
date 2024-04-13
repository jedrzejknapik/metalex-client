import { FC } from 'react';

import { useSingleOrder } from '@providers/single-order/hooks';

import Typography from '@components/typography';

import styles from './order-nr.module.scss';

export const OrderNr: FC = () => {
  const { orderNr } = useSingleOrder();

  return (
    <div className={styles.container}>
      <Typography.Text ellipsis>{orderNr}</Typography.Text>
    </div>
  );
};
