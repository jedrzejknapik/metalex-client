import { useI18nContext } from '@i18n/i18n-react';
import { v4 as uuidv4 } from 'uuid';

import { CreateOrderFormFields } from '@types';

import { useOrderForm } from '@pages/protected/order/new-order/providers';

import { Summary } from '../../summary.types';

export const useGetProductQuantity = (): Summary | undefined => {
  const { LL } = useI18nContext();
  const { form } = useOrderForm();

  const productQuantity = form.getFieldValue(
    CreateOrderFormFields.PRODUCTS_QUANTITY,
  );

  if (!productQuantity) {
    return;
  }

  return {
    id: uuidv4(),
    hasChildren: false,
    label: LL.ORDER.NEW_ORDER.SUMMARY.FIELDS.PRODUCT_QUANTITY.LABEL(),
    value: productQuantity,
  };
};
