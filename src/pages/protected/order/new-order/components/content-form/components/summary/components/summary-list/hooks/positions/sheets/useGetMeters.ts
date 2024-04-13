import { useI18nContext } from '@i18n/i18n-react';
import { v4 as uuidv4 } from 'uuid';

import { Sheet } from '@types';

import { Summary } from '../../../summary.types';

export const useGetMeters = () => {
  const { LL } = useI18nContext();

  const getMeters = (value: Sheet['meters']): Summary => {
    return {
      id: uuidv4(),
      hasChildren: false,
      label:
        LL.ORDER.NEW_ORDER.SUMMARY.FIELDS.POSITIONS.FIELDS.SHEETS.FIELDS.METERS.LABEL(),
      value,
    };
  };

  return {
    getMeters,
  };
};
