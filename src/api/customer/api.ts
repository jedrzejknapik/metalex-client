import { api } from '@services/axios';

import { Customer } from '@types';

export const getCustomerList = (): Promise<Customer[]> => {
  return api.get('order/customers');
};
