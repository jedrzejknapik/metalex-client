import { useI18nContext } from '@i18n/i18n-react';
import { v4 as uuidv4 } from 'uuid';

import { CreateOrderFormFields } from '@types';

import { useOrderForm } from '@pages/protected/order/new-order/providers';

import { CURRENCY } from '@utils/app-settings';

import { Summary } from '../../summary.types';

export const useGetPrice = (): Summary | undefined => {
  const { LL } = useI18nContext();
  const { form } = useOrderForm();

  const price = form.getFieldValue(CreateOrderFormFields.PRICE);

  if (!price) {
    return;
  }

  return {
    id: uuidv4(),
    hasChildren: false,
    label: LL.ORDER.NEW_ORDER.SUMMARY.FIELDS.PRICE.LABEL(),
    value: `${price} ${CURRENCY}`,
  };
};
