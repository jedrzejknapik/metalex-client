import { useContext } from 'react';

import { OrderListContext } from '../order-list-context';

export const useOrderList = () => {
  const orderList = useContext(OrderListContext);

  if (!orderList) {
    throw new Error('useOrderList must be used within OrderListContext');
  }

  return orderList;
};
