import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from '@api/query-keys';

import { Customer } from '@types';

import { getCustomerList } from './api';

export const useGetCustomerList = () => {
  return useQuery<Customer[]>({
    queryKey: [QueryKeys.CUSTOMER_LIST],
    queryFn: getCustomerList,
  });
};
