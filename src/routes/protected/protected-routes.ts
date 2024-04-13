export const PROTECTED_GUARD_ROUTE = {
  HOME: () => '/',
  DASHBOARD: () => '/dashboard',
  USER_PROFILE: () => '/profile',
  ORDER: () => '/order',
  NOT_FOUND: () => '/not-found',
};

export const PROTECTED_ROUTES = {
  HOME: () => '/',
  DASHBOARD: () => '/dashboard',
  USER_PROFILE: () => '/profile',
  ORDER: {
    HOME: (orderNr = ':orderNr') => `/order/${orderNr}`,
    NEW_ORDER: () => '/order/new-order',
    EDIT_ORDER: (orderNr = ':orderNr') => `/order/${orderNr}/edit`,
    VIEW_ORDER: (orderNr = ':orderNr') => `/order/${orderNr}/view`,
  },
  NOT_FOUND: () => '/not-found',
};
