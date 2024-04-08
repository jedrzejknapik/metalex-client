import { ReactNode } from 'react';

export enum MenuOptionKey {
  DASHBOARD = 'dashboard',
  USER_PROFILE = 'user-profile',
}

export interface MenuOption {
  id: MenuOptionKey;
  icon: ReactNode;
  text: ReactNode;
  href: string;
}
