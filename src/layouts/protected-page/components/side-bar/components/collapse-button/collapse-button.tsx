import { FC } from 'react';

import { useSideBarState } from '@layouts/protected-page/providers';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { Button } from '@components/button/button';

import styles from './collapse-button.module.scss';

export const CollapseButton: FC = () => {
  const { collapsed, onToggleToolBar } = useSideBarState();

  return (
    <Button
      onClick={onToggleToolBar}
      icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
      className={styles.button}
    />
  );
};
