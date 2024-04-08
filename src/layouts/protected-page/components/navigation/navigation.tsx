import { FC } from 'react';
import { Flex } from 'antd';

import { Header } from '@components/header/header';
import { ThemeToggle } from '@components/theme-toggle/theme-toggle';

import { Notifications, SignOut, UserAvatar } from './components';

import styles from './navigation.module.scss';

export const Navigation: FC = () => {
  return (
    <Header className={styles.header}>
      <Flex gap="small" align="center" className={styles.information}>
        <ThemeToggle />
        <Notifications />
        <UserAvatar />
        <SignOut />
      </Flex>
    </Header>
  );
};
