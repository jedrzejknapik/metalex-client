import { api } from '@services/axios';

import { Profile } from '@types';

export const getProfileList = (): Promise<Profile[]> => {
  return api.get('order/profiles');
};
