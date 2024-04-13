import { useContext } from 'react';

import { SideBarStateContext } from '../side-bar-state-context';

export const useSideBar = () => {
  const sideBarState = useContext(SideBarStateContext);

  if (!sideBarState) {
    throw new Error('useSideBar must be used within SideBarStateContext');
  }

  return sideBarState;
};
