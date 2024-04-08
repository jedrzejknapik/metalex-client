import { createContext } from 'react';

export interface SideBarStateContextProps {
  collapsed: boolean;
  onToggleToolBar: () => void;
}

export const SideBarStateContext = createContext<
  SideBarStateContextProps | undefined
>(undefined);
