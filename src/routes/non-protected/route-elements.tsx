import { Route } from 'react-router-dom';

import { SignIn, ForgotPassword } from '@pages/non-protected';

import { NON_PROTECTED_ROUTES } from './non-protected-routes';
import { NonProtectedProviders } from './non-protected-providers';

export const NON_PROTECTED_ROUTE_ELEMENTS = (
  <Route path={NON_PROTECTED_ROUTES.HOME()} element={<NonProtectedProviders />}>
    <Route path={NON_PROTECTED_ROUTES.SIGN_IN()} element={<SignIn />} />
    <Route
      path={NON_PROTECTED_ROUTES.FORGOT_PASSWORD()}
      element={<ForgotPassword />}
    />
  </Route>
);
