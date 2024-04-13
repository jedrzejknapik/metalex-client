import { useI18nContext } from '@i18n/i18n-react';
import { v4 as uuidv4 } from 'uuid';

import { Sheet } from '@types';

import { Summary } from '../../../summary.types';

export const useGetFoiled = () => {
  const { LL } = useI18nContext();

  const getFoiled = (foiled: Sheet['isFoiled']): Summary => {
    return {
      id: uuidv4(),
      hasChildren: false,
      label:
        LL.ORDER.NEW_ORDER.SUMMARY.FIELDS.POSITIONS.FIELDS.SHEETS.FIELDS.FOILED.LABEL(),
      value: foiled ? LL.COMMONS.YES() : LL.COMMONS.NO(),
    };
  };

  return {
    getFoiled,
  };
};
