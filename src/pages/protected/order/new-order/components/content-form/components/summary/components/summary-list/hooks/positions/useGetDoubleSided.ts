import { useI18nContext } from '@i18n/i18n-react';
import { v4 as uuidv4 } from 'uuid';

import { Position } from '@types';

import { Summary } from '../../summary.types';

export const useGetDoubleSided = () => {
  const { LL } = useI18nContext();

  const getDoubleSided = (doubleSided: Position['isDoubleSided']): Summary => {
    return {
      id: uuidv4(),
      hasChildren: false,
      label:
        LL.ORDER.NEW_ORDER.SUMMARY.FIELDS.POSITIONS.FIELDS.DOUBLE_SIDED.LABEL(),
      value: doubleSided ? LL.COMMONS.YES() : LL.COMMONS.NO(),
    };
  };

  return {
    getDoubleSided,
  };
};
