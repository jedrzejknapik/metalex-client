import { useI18nContext } from '@i18n/i18n-react';

import { PROTECTED_ROUTES } from '@routes';

import { MenuOption, MenuOptionKey } from '@types';

import { Dashboard, User } from '../images';

export const useMenu = () => {
  const { LL } = useI18nContext();

  const options: MenuOption[] = [
    {
      id: MenuOptionKey.DASHBOARD,
      href: PROTECTED_ROUTES.DASHBOARD(),
      icon: <Dashboard />,
      text: LL.MENU_LIST.DASHBOARD(),
    },
    {
      id: MenuOptionKey.USER_PROFILE,
      href: PROTECTED_ROUTES.USER_PROFILE(),
      icon: <User />,
      text: LL.MENU_LIST.PROFILE(),
    },
  ];

  return {
    options,
  };
};
