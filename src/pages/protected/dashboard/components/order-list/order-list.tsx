import { FC } from 'react';

import { Order } from '@types';

import { SingleOrderProvider } from '@providers/single-order/single-order-provider';

import { ListAnimation } from '@animations/list-animation/list-animation';
import { ListItemAnimation } from '@animations/list-item-animation/list-item-animation';

import { ListHeaders, OrderCard } from './components';

import { useOrderList } from '../../providers';

import styles from './order-list.module.scss';

export const OrderList: FC = () => {
  const { orderList } = useOrderList();

  const { data } = orderList;

  return (
    <div className={styles.container}>
      <ListHeaders />
      <ListAnimation className={styles.list}>
        {data.map((order: Order, index: number) => (
          <SingleOrderProvider key={order.id} order={order}>
            <ListItemAnimation index={index}>
              <OrderCard />
            </ListItemAnimation>
          </SingleOrderProvider>
        ))}
      </ListAnimation>
    </div>
  );
};
