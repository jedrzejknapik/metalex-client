import { FC } from 'react';

import { useMenu } from './hooks';

import { Logo, MenuLink } from './components';

import styles from './menu.module.scss';

export const Menu: FC = () => {
  const { options } = useMenu();

  return (
    <div className={styles.container}>
      <Logo />
      <ul className={styles.list}>
        {options.map((props) => (
          <li key={props.id}>
            <MenuLink {...props} />
          </li>
        ))}
      </ul>
    </div>
  );
};
