import { FC, PropsWithChildren } from 'react';

import {
  SideBarStateContext,
  SideBarStateContextProps,
} from './side-bar-state-context';

import { useSideBar } from './hooks';

export const SideBarStateProvider: FC<PropsWithChildren> = ({ children }) => {
  const { collapsed, onToggleToolBar } = useSideBar();

  const value: SideBarStateContextProps = {
    collapsed,
    onToggleToolBar,
  };

  return (
    <SideBarStateContext.Provider value={value}>
      {children}
    </SideBarStateContext.Provider>
  );
};
