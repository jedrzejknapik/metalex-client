import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '@providers/auth/hooks';

import { PROTECTED_ROUTES, NON_PROTECTED_ROUTES } from '@routes';

interface RouteGuardProps {
  isProtected?: boolean;
}

export const RouteGuard: FC<PropsWithChildren<RouteGuardProps>> = ({
  isProtected,
  children,
}) => {
  const { isAuthenticated } = useAuth();

  if (isProtected) {
    return isAuthenticated ? (
      children
    ) : (
      <Navigate to={NON_PROTECTED_ROUTES.SIGN_IN()} />
    );
  }

  return isAuthenticated ? (
    <Navigate to={PROTECTED_ROUTES.DASHBOARD()} />
  ) : (
    children
  );
};
