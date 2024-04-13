import { api } from '@services/axios';

import { Color } from '@types';

export const getColorList = (): Promise<Color[]> => {
  return api.get('order/colors');
};
