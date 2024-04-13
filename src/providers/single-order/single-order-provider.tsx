import { FC, PropsWithChildren } from 'react';

import { Order } from '@types';

import {
  SingleOrderContext,
  SingleOrderContextProps,
} from './single-order-context';

interface SingleOrderProviderProps {
  order: Order;
}

export const SingleOrderProvider: FC<
  PropsWithChildren<SingleOrderProviderProps>
> = ({ children, order }) => {
  const value: SingleOrderContextProps = {
    order,
  };

  return (
    <SingleOrderContext.Provider value={value}>
      {children}
    </SingleOrderContext.Provider>
  );
};
