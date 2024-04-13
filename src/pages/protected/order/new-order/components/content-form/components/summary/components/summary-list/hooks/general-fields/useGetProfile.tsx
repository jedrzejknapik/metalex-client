import { useI18nContext } from '@i18n/i18n-react';

import { useOrderForm } from '@pages/protected/order/new-order/providers';

import { CreateOrderFormFields } from '@types';

import { useFindFormValue } from './../useFindFormValue';

import { Summary } from '../../summary.types';

export const useGetProfile = (): Summary | undefined => {
  const { LL } = useI18nContext();
  const { profiles } = useOrderForm();
  const { getSelectedData } = useFindFormValue();

  const profile = getSelectedData(CreateOrderFormFields.PROFILE_ID, profiles);

  if (!profile) {
    return;
  }

  const { id, name } = profile;

  return {
    id,
    hasChildren: false,
    label: LL.ORDER.NEW_ORDER.SUMMARY.FIELDS.PROFILE.LABEL(),
    value: name,
  };
};
