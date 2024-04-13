import { useI18nContext } from '@i18n/i18n-react';

import { useOrderForm } from '@pages/protected/order/new-order/providers';

import { CreateOrderFormFields } from '@types';

import { useFindFormValue } from '../useFindFormValue';

import { OptionPreview } from '../../components';

import { Summary } from '../../summary.types';

export const useGetCustomer = (): Summary | undefined => {
  const { LL } = useI18nContext();
  const { customers } = useOrderForm();
  const { getSelectedData } = useFindFormValue();

  const customer = getSelectedData(
    CreateOrderFormFields.CUSTOMER_ID,
    customers,
  );

  if (!customer) {
    return;
  }

  const { id, firstName, lastName, imageRef } = customer;

  return {
    id,
    hasChildren: false,
    label: LL.ORDER.NEW_ORDER.SUMMARY.FIELDS.CUSTOMER.LABEL(),
    value: (
      <OptionPreview
        imageRef={imageRef || ''}
        value={`${firstName} ${lastName}`}
      />
    ),
  };
};
