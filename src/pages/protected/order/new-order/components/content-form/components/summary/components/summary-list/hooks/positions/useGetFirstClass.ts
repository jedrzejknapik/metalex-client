import { useI18nContext } from '@i18n/i18n-react';
import { v4 as uuidv4 } from 'uuid';

import { Position } from '@types';

import { Summary } from '../../summary.types';

export const useGetFirstClass = () => {
  const { LL } = useI18nContext();

  const getFirstClass = (firstClass: Position['isFirstClass']): Summary => {
    return {
      id: uuidv4(),
      hasChildren: false,
      label:
        LL.ORDER.NEW_ORDER.SUMMARY.FIELDS.POSITIONS.FIELDS.FIRST_CLASS.LABEL(),
      value: firstClass ? LL.COMMONS.YES() : LL.COMMONS.NO(),
    };
  };

  return {
    getFirstClass,
  };
};
