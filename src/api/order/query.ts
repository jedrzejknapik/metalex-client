import { useMutation, useQuery } from '@tanstack/react-query';

import { QueryKeys } from '@api/query-keys';

import { Pagination, Order, CreateOrderPayload } from '@types';

import { createOrder, getOrderList, getSingleOrder } from './api';
import { queryClient } from '@providers/react-query/react-query-provider';

export const useGetOrderList = () => {
  return useQuery<Pagination<Order>>({
    queryKey: [QueryKeys.ORDER_LIST],
    queryFn: getOrderList,
  });
};

export const useGetSingleOrder = (orderNr: Order['orderNr']) => {
  return useQuery<Order | null>({
    queryKey: [QueryKeys.ORDER, orderNr],
    queryFn: () => getSingleOrder(orderNr),
  });
};

export const useCreateOrder = () => {
  return useMutation({
    mutationFn: (payload: CreateOrderPayload) => createOrder(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.ORDER_LIST] });
    },
  });
};
