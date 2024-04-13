import { useI18nContext } from '@i18n/i18n-react';
import { v4 as uuidv4 } from 'uuid';

import { Position } from '@types';

import { Summary } from '../../summary.types';

export const useGetWidth = () => {
  const { LL } = useI18nContext();

  const getWidth = (value: Position['width']): Summary => {
    return {
      id: uuidv4(),
      hasChildren: false,
      label: LL.ORDER.NEW_ORDER.SUMMARY.FIELDS.POSITIONS.FIELDS.WIDTH.LABEL(),
      value,
    };
  };

  return {
    getWidth,
  };
};
