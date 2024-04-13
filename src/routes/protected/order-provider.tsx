import { FC } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { useGetSingleOrder } from '@api/order';

import { SingleOrderProvider } from '@providers/single-order/single-order-provider';

export const OrderProvider: FC = () => {
  const { orderNr } = useParams() as { orderNr: string };
  const { data } = useGetSingleOrder(orderNr);

  if (!data) {
    return <p>Loading</p>;
  }

  return (
    <SingleOrderProvider order={data}>
      <Outlet />
    </SingleOrderProvider>
  );
};
