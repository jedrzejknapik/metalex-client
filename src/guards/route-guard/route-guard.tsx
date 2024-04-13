import { FC, PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '@providers/auth/hooks';

import {
  PROTECTED_ROUTES,
  NON_PROTECTED_ROUTES,
  PROTECTED_GUARD_ROUTE,
} from '@routes';

interface RouteGuardProps {
  isProtected?: boolean;
}

export const RouteGuard: FC<PropsWithChildren<RouteGuardProps>> = ({
  isProtected,
  children,
}) => {
  const { isAuthenticated } = useAuth();
  const { pathname } = useLocation();

  const doesProtectedRouteExist = Object.values(PROTECTED_GUARD_ROUTE).some(
    (value) => {
      const route = value();

      if (route.startsWith(PROTECTED_GUARD_ROUTE.ORDER())) {
        return pathname.includes(route);
      }

      return value() === pathname;
    },
  );

  const doesNonProtectedRouteExist = Object.values(NON_PROTECTED_ROUTES).some(
    (value) => value() === pathname,
  );

  if (isProtected) {
    if (!isAuthenticated && doesNonProtectedRouteExist) {
      return children;
    }
    if (isAuthenticated && doesProtectedRouteExist) {
      return children;
    }

    return <Navigate to={NON_PROTECTED_ROUTES.NOT_FOUND()} />;
  }

  if (isAuthenticated && doesNonProtectedRouteExist) {
    return <Navigate to={PROTECTED_ROUTES.NOT_FOUND()} />;
  }

  if (!isAuthenticated && doesProtectedRouteExist) {
    return <Navigate to={NON_PROTECTED_ROUTES.NOT_FOUND()} />;
  }

  return children;
};
