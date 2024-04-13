import { useGetOrderList } from '@api/order';

export const useOrderListState = () => {
  const { data } = useGetOrderList();

  return {
    orderList: data,
  };
};
