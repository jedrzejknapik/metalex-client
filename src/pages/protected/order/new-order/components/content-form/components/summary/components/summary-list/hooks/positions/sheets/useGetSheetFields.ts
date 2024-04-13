import { Sheet } from '@types';

import { useGetFoiled } from './useGetFoiled';
import { useGetMeters } from './useGetMeters';
import { useGetQuantity } from './useGetQuantity';

import { Summary } from '../../../summary.types';

export const useGetSheetFields = () => {
  const { getQuantity } = useGetQuantity();
  const { getMeters } = useGetMeters();
  const { getFoiled } = useGetFoiled();

  const getSheetFields = ({ isFoiled, meters, quantity }: Sheet) => {
    const fields: Summary[] = [];

    fields.push(getQuantity(quantity));
    fields.push(getMeters(meters));
    fields.push(getFoiled(isFoiled));

    return fields;
  };

  return {
    getSheetFields,
  };
};
