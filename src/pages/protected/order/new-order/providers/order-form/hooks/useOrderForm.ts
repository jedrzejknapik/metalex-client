import { useContext } from 'react';

import { OrderFormContext } from '../order-form-context';

export const useOrderForm = () => {
  const orderForm = useContext(OrderFormContext);

  if (!orderForm) {
    throw new Error('useOrderForm must be used within OrderFormContext');
  }

  return orderForm;
};
