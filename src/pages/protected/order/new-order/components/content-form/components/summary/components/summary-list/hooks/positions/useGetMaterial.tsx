import { useI18nContext } from '@i18n/i18n-react';

import { useOrderForm } from '@pages/protected/order/new-order/providers';

import { Material } from '@types';

import { OptionPreview } from '../../components';

import { Summary } from '../../summary.types';

export const useGetMaterial = () => {
  const { LL } = useI18nContext();
  const { materials } = useOrderForm();

  const getMaterial = (materialId: Material['id']): Summary | undefined => {
    const material = materials.find(({ id }) => id === materialId);

    if (!material) {
      return;
    }

    const { id, name, imageRef } = material;

    return {
      id,
      hasChildren: false,
      label:
        LL.ORDER.NEW_ORDER.SUMMARY.FIELDS.POSITIONS.FIELDS.MATERIAL.LABEL(),
      value: <OptionPreview imageRef={imageRef || ''} value={name} />,
    };
  };

  return {
    getMaterial,
  };
};
