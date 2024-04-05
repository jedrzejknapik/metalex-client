import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { RouteGuard } from '@guards/route-guard/route-guard';

import { ProtectedPage } from '@layouts/protected-page/protected-page';

import { UserSessionProvider } from '@providers/user-session/user-session-provider';

export const ProtectedProviders: FC = () => {
  return (
    <RouteGuard isProtected>
      <UserSessionProvider>
        <ProtectedPage>
          <Outlet />
        </ProtectedPage>
      </UserSessionProvider>
    </RouteGuard>
  );
};
