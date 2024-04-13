import { createContext } from 'react';

import { Order, Pagination } from '@types';

export interface OrderListContextProps {
  orderList: Pagination<Order>;
}

export const OrderListContext = createContext<
  OrderListContextProps | undefined
>(undefined);
