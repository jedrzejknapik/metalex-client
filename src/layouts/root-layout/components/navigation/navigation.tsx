import { FC } from 'react';

import { NavigationContainer } from '@components/navigation-container/navigation-container';

import { Notifications, UserInfo } from './components';
import { Flex } from 'antd';

import styles from './navigation.module.scss';

export const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <Flex gap="small" align="center" className={styles.information}>
        <Notifications />
        <UserInfo />
      </Flex>
    </NavigationContainer>
  );
};
