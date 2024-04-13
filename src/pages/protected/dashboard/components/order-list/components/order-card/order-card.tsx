import { FC } from 'react';

import { Card } from '@components/card/card';

import { GridLayout } from '../grid-layout/grid-layout';

import {
  OrderNr,
  CreatedAt,
  Customer,
  Price,
  Status,
  Options,
} from './components';

import styles from './order-card.module.scss';

export const OrderCard: FC = () => {
  return (
    <Card className={styles.card} classNames={{ body: styles.body }}>
      <GridLayout>
        <OrderNr />
        <CreatedAt />
        <Customer />
        <Price />
        <Status />
        <Options />
      </GridLayout>
    </Card>
  );
};
