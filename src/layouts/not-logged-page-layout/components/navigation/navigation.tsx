import { FC } from 'react';
import { Flex } from 'antd';

import { NavigationContainer } from '@components/navigation-container/navigation-container';
import { ThemeToggle } from '@components/theme-toggle/theme-toggle';

import styles from './navigation.module.scss';

export const Navigation: FC = () => {
  return (
    <div className={styles.container}>
      <NavigationContainer className={styles.navigation}>
        <Flex gap="small" align="center">
          <ThemeToggle />
        </Flex>
      </NavigationContainer>
    </div>
  );
};
