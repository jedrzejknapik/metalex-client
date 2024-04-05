import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { RouteGuard } from '@guards/route-guard/route-guard';

export const NonProtectedProviders: FC = () => {
  return (
    <RouteGuard>
      <Outlet />
    </RouteGuard>
  );
};
