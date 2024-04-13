import { api } from '@services/axios';

import { Material } from '@types';

export const getMaterialList = (): Promise<Material[]> => {
  return api.get('order/materials');
};
