import { FC, PropsWithChildren } from 'react';

import { useAuth } from '@providers/auth/hooks';

import {
  UserSessionContext,
  UserSessionContextProps,
} from './user-session-context';

export const UserSessionProvider: FC<PropsWithChildren> = ({ children }) => {
  const { userSession } = useAuth();

  if (!userSession) {
    return <p>Loading</p>;
  }

  const value: UserSessionContextProps = {
    userSession,
  };

  return (
    <UserSessionContext.Provider value={value}>
      {children}
    </UserSessionContext.Provider>
  );
};
