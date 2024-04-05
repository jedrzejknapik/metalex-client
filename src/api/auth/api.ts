import { api } from '@services/axios';

import { SignInPayload, UserSession } from '@types';

export const onSignIn = (payload: SignInPayload): Promise<string> =>
  api.post('auth/signin', payload);

export const onAuthorization = (): Promise<UserSession> => {
  return api.get('auth/me');
};
