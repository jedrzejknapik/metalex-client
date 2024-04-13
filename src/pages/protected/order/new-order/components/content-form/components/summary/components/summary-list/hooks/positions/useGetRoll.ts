import { useI18nContext } from '@i18n/i18n-react';

import { useOrderForm } from '@pages/protected/order/new-order/providers';

import { Roll } from '@types';

import { Summary } from '../../summary.types';

export const useGetRoll = () => {
  const { LL } = useI18nContext();
  const { rolls } = useOrderForm();

  const getRoll = (rollId: Roll['id']): Summary | undefined => {
    const roll = rolls.find(({ id }) => id === rollId);

    if (!roll) {
      return;
    }

    const { id, name } = roll;

    return {
      id,
      hasChildren: false,
      label: LL.ORDER.NEW_ORDER.SUMMARY.FIELDS.POSITIONS.FIELDS.ROLL.LABEL(),
      value: name,
    };
  };

  return {
    getRoll,
  };
};
