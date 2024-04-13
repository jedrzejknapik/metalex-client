import { useI18nContext } from '@i18n/i18n-react';
import { v4 as uuidv4 } from 'uuid';

import { Position } from '@types';

import { Summary } from '../../summary.types';

export const useGetGlossy = () => {
  const { LL } = useI18nContext();

  const getGlossy = (glossy: Position['isGlossy']): Summary => {
    return {
      id: uuidv4(),
      hasChildren: false,
      label: LL.ORDER.NEW_ORDER.SUMMARY.FIELDS.POSITIONS.FIELDS.GLOSSY.LABEL(),
      value: glossy ? LL.COMMONS.YES() : LL.COMMONS.NO(),
    };
  };

  return {
    getGlossy,
  };
};
