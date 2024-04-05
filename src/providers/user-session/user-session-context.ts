import { createContext } from 'react';

import { UserSession } from '@types';

export interface UserSessionContextProps {
  userSession: UserSession;
}

export const UserSessionContext = createContext<
  UserSessionContextProps | undefined
>(undefined);
