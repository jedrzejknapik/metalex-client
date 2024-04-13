import { api } from '@services/axios';

import { Thickness } from '@types';

export const getThicknessList = (): Promise<Thickness[]> => {
  return api.get('order/thickness');
};
