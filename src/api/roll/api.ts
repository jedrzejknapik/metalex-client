import { api } from '@services/axios';

import { Roll } from '@types';

export const getRollList = (): Promise<Roll[]> => {
  return api.get('order/rolls');
};
