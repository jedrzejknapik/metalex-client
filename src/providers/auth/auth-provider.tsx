import { FC, PropsWithChildren } from 'react';

import { AuthContext, AuthContextProps } from './auth-context';

import { useHandleAuthorization } from './hooks';

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { userSession, isAuthenticated, onSingInUser, onSignOutUser } =
    useHandleAuthorization();

  if (isAuthenticated === null) {
    return <p>Loading</p>;
  }

  const value: AuthContextProps = {
    userSession,
    isAuthenticated,
    onSingInUser,
    onSignOutUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
