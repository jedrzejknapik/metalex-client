import { api } from '@services/axios';

import { Pagination, Order, CreateOrderPayload } from '@types';

import { getCustomer } from './mocks';

const addMockedCustomerToEveryOrder = (data: Order[]) => {
  return data.map((props: Order) => {
    return {
      ...props,
      customer: getCustomer(),
    };
  });
};

export const getOrderList = (): Promise<Pagination<Order>> => {
  return api.get('order').then((data) => ({
    data: addMockedCustomerToEveryOrder(data),
    metadata: {
      page: 1,
      size: 10,
      totalItems: 10,
      totalPages: 1,
    },
  }));
};

export const getSingleOrder = (
  orderNr: Order['orderNr'],
): Promise<Order | null> => {
  return api.get(`order/${orderNr}`);
};

export const createOrder = (payload: CreateOrderPayload): Promise<Order> => {
  return api.post('order', payload);
};
