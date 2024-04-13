import { useOrderForm } from '@pages/protected/order/new-order/providers';

import { DefaultOptionType } from 'antd/es/select';

import { Customer } from '@types';

import { CustomerLabel } from '../components';

export const useSelectOptions = () => {
  const { customers } = useOrderForm();

  const options: DefaultOptionType[] = customers.map((customer: Customer) => ({
    value: customer.id,
    label: <CustomerLabel {...customer} />,
  }));

  return {
    options,
  };
};
