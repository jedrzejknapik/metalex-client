import { FC } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";

import { Button } from "antd";

import { MENU_ITEMS } from "./menu.consts";

import styles from "./side-menu.module.scss";

export const SideMenu: FC = () => {
  return (
    <nav>
      <ul className={styles.list}>
        {MENU_ITEMS.map(({ key, href, icon, title }) => (
          <li key={key}>
            <NavLink
              to={href}
              className={({ isActive }) => cn({ [styles.active]: isActive })}
            >
              <Button icon={icon} type="text" className={styles.button}>
                {title}
              </Button>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
