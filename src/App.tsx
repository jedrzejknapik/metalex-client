import { FC, cloneElement } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import { ROUTE_ELEMENTS } from '@routes';

export const App: FC = () => {
  const location = useLocation();
  const element = useRoutes(ROUTE_ELEMENTS);

  if (!element) return null;

  return (
    <AnimatePresence mode="wait" initial={false}>
      {cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
};
