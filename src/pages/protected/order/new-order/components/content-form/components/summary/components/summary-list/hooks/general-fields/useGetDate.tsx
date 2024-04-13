import { useI18nContext } from '@i18n/i18n-react';
import { v4 as uuidv4 } from 'uuid';

import { useOrderForm } from '@pages/protected/order/new-order/providers';

import { CreateOrderFormFields } from '@types';

import { Summary } from '../../summary.types';

export const useGetDate = (): Summary | undefined => {
  const { LL } = useI18nContext();
  const { form } = useOrderForm();

  const date = form.getFieldValue(CreateOrderFormFields.DATE);

  if (!date) {
    return;
  }

  const dateFormat = new Date(date).toLocaleDateString('pl-PL', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return {
    id: uuidv4(),
    hasChildren: false,
    label: LL.ORDER.NEW_ORDER.SUMMARY.FIELDS.DATE.LABEL(),
    value: dateFormat,
  };
};
