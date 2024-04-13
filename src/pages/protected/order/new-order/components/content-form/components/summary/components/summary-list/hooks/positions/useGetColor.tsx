import { useI18nContext } from '@i18n/i18n-react';

import { useOrderForm } from '@pages/protected/order/new-order/providers';

import { Color } from '@types';

import { Summary } from '../../summary.types';

import { ColorPreview } from '../../components';

export const useGetColor = () => {
  const { LL } = useI18nContext();
  const { colors } = useOrderForm();

  const getColor = (colorId: Color['id']): Summary | undefined => {
    const color = colors.find(({ id }) => id === colorId);

    if (!color) {
      return;
    }

    const { id } = color;

    return {
      id,
      hasChildren: false,
      label: LL.ORDER.NEW_ORDER.SUMMARY.FIELDS.POSITIONS.FIELDS.COLOR.LABEL(),
      value: <ColorPreview {...color} />,
    };
  };

  return {
    getColor,
  };
};
