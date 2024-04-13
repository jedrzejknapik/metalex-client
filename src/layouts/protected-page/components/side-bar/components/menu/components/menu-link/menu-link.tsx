import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import { useSideBar } from '@layouts/protected-page/providers';

import { MenuOption } from '@types';

import styles from './menu-link.module.scss';

export const MenuLink: FC<MenuOption> = ({ href, icon, text }) => {
  const { collapsed } = useSideBar();

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        cn(styles.link, {
          [styles.onlyLogo]: collapsed,
          [styles.isActive]: isActive,
        })
      }
    >
      {icon}
      {!collapsed && text}
    </NavLink>
  );
};
