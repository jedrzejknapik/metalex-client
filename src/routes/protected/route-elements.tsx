import { Route } from 'react-router-dom';

import { Dashboard, UserProfile } from '@pages/protected';

import { PROTECTED_ROUTES } from './protected-routes';
import { ProtectedProviders } from './protected-providers';

export const PROTECTED_ROUTE_ELEMENTS = (
  <Route path={PROTECTED_ROUTES.HOME()} element={<ProtectedProviders />}>
    <Route path={PROTECTED_ROUTES.DASHBOARD()} element={<Dashboard />} />
    <Route path={PROTECTED_ROUTES.USER_PROFILE()} element={<UserProfile />} />
  </Route>
);
