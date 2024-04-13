import { useI18nContext } from '@i18n/i18n-react';

import { useOrderForm } from '@pages/protected/order/new-order/providers';

import { Thickness } from '@types';

import { Summary } from '../../summary.types';

export const useGetThickness = () => {
  const { LL } = useI18nContext();
  const { thickness } = useOrderForm();

  const getThickness = (thicknessId: Thickness['id']): Summary | undefined => {
    const thickValue = thickness.find(({ id }) => id === thicknessId);

    if (!thickValue) {
      return;
    }

    const { id, name } = thickValue;

    return {
      id,
      hasChildren: false,
      label:
        LL.ORDER.NEW_ORDER.SUMMARY.FIELDS.POSITIONS.FIELDS.THICKNESS.LABEL(),
      value: name,
    };
  };

  return {
    getThickness,
  };
};
