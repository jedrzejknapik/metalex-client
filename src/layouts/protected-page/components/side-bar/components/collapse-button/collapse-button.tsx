import { FC } from 'react';

import { useSideBar } from '@layouts/protected-page/providers';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { Button } from '@components/button/button';

import styles from './collapse-button.module.scss';

export const CollapseButton: FC = () => {
  const { collapsed, onToggleToolBar } = useSideBar();

  return (
    <Button
      onClick={onToggleToolBar}
      icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
      className={styles.button}
    />
  );
};
