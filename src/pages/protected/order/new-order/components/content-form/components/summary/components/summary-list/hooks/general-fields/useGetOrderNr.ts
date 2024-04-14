import { useI18nContext } from '@i18n/i18n-react';
import { v4 as uuidv4 } from 'uuid';

import { useOrderForm } from '@pages/protected/order/new-order/providers';

import { CreateOrderFormFields } from '@types';

import { Summary } from '../../summary.types';

export const useGetOrderNr = (): Summary | undefined => {
  const { LL } = useI18nContext();
  const { form } = useOrderForm();

  const orderNr = form.getFieldValue(CreateOrderFormFields.ORDER_NR);

  if (!orderNr) {
    return;
  }

  return {
    id: uuidv4(),
    hasChildren: false,
    label: LL.ORDER.NEW_ORDER.SUMMARY.FIELDS.ORDER_NR.LABEL(),
    value: orderNr,
  };
};
