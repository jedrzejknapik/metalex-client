import { FC, PropsWithChildren } from 'react';

import { OrderListContext, OrderListContextProps } from './order-list-context';

import { useOrderListState } from './hooks';

export const OrderListProvider: FC<PropsWithChildren> = ({ children }) => {
  const { orderList } = useOrderListState();

  if (!orderList) {
    return <p>Loading</p>;
  }

  const value: OrderListContextProps = {
    orderList,
  };

  return (
    <OrderListContext.Provider value={value}>
      {children}
    </OrderListContext.Provider>
  );
};
