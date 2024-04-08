import { useContext } from 'react';

import { SideBarStateContext } from '../side-bar-state-context';

export const useSideBarState = () => {
  const sideBarState = useContext(SideBarStateContext);

  if (!sideBarState) {
    throw new Error('useSideBarState must be used within SideBarStateContext');
  }

  return sideBarState;
};
