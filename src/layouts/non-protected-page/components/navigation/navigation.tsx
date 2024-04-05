import { FC } from 'react';
import { Flex } from 'antd';

import { Header } from '@components/header/header';
import { ThemeToggle } from '@components/theme-toggle/theme-toggle';

import styles from './navigation.module.scss';

export const Navigation: FC = () => {
  return (
    <div className={styles.container}>
      <Header className={styles.navigation}>
        <Flex gap="small" align="center">
          <ThemeToggle />
        </Flex>
      </Header>
    </div>
  );
};
