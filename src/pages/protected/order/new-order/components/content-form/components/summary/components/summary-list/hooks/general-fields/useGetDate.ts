import { useI18nContext } from '@i18n/i18n-react';
import { v4 as uuidv4 } from 'uuid';

import { useOrderForm } from '@pages/protected/order/new-order/providers';

import { CreateOrderFormFields } from '@types';

import { getReadableDateFormat } from '@utils/get-readable-date-format';

import { Summary } from '../../summary.types';

export const useGetDate = (): Summary | undefined => {
  const { LL } = useI18nContext();
  const { form } = useOrderForm();

  const date = form.getFieldValue(CreateOrderFormFields.CREATED_AT);

  if (!date) {
    return;
  }

  const dateFormat = getReadableDateFormat(date);

  return {
    id: uuidv4(),
    hasChildren: false,
    label: LL.ORDER.NEW_ORDER.SUMMARY.FIELDS.DATE.LABEL(),
    value: dateFormat,
  };
};
