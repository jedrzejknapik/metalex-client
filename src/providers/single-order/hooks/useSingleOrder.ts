import { useContext } from 'react';

import { SingleOrderContext } from '../single-order-context';

export const useSingleOrder = () => {
  const singleOrder = useContext(SingleOrderContext);

  if (!singleOrder) {
    throw new Error('useSingleOrder must be used within SingleOrderContext');
  }

  const { order } = singleOrder;

  return order;
};
