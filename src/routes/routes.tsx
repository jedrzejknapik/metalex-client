import { createRoutesFromElements } from 'react-router-dom';

import { NON_PROTECTED_ROUTE_ELEMENTS } from './non-protected/route-elements';
import { PROTECTED_ROUTE_ELEMENTS } from './protected/route-elements';

export const ROUTE_ELEMENTS = createRoutesFromElements(
  <>
    {NON_PROTECTED_ROUTE_ELEMENTS}
    {PROTECTED_ROUTE_ELEMENTS}
  </>,
);
