import { createContext } from 'react';

import { SignInPayload, UserSession } from '@types';

export interface AuthContextProps {
  userSession: UserSession | null;
  isAuthenticated: boolean;
  onSingInUser: (payload: SignInPayload) => Promise<void>;
  onSignOutUser: () => Promise<void>;
  isSignInFormSubmitted: boolean;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined,
);
