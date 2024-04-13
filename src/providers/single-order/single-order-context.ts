import { createContext } from 'react';

import { Order } from '@types';

export interface SingleOrderContextProps {
  order: Order;
}

export const SingleOrderContext = createContext<
  SingleOrderContextProps | undefined
>(undefined);
