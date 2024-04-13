import { Route } from 'react-router-dom';

import { Dashboard, NewOrder, UserProfile, ViewOrder } from '@pages/protected';

import { PROTECTED_ROUTES } from './protected-routes';
import { ProtectedProviders } from './protected-providers';
import { OrderProvider } from './order-provider';

export const PROTECTED_ROUTE_ELEMENTS = (
  <Route path={PROTECTED_ROUTES.HOME()} element={<ProtectedProviders />}>
    <Route path={PROTECTED_ROUTES.DASHBOARD()} element={<Dashboard />} />
    <Route path={PROTECTED_ROUTES.USER_PROFILE()} element={<UserProfile />} />
    <Route path={PROTECTED_ROUTES.ORDER.NEW_ORDER()} element={<NewOrder />} />
    <Route path={PROTECTED_ROUTES.ORDER.HOME()} element={<OrderProvider />}>
      <Route
        path={PROTECTED_ROUTES.ORDER.VIEW_ORDER()}
        element={<ViewOrder />}
      />
    </Route>
  </Route>
);
