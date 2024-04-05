import { useContext } from 'react';

import { UserSessionContext } from '../user-session-context';

export const useUserSession = () => {
  const session = useContext(UserSessionContext);

  if (!session) {
    throw new Error('useUserSession must be used within UserSessionContext');
  }

  const { userSession } = session;

  return userSession;
};
