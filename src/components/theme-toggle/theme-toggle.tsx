import { FC } from 'react';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';

import { IconButton } from '@components/icon-button/icon-button';

import { AppTheme } from '@types';

import { useHandleAppTheme } from './hooks';

export const ThemeToggle: FC = () => {
  const { theme, onToggleTheme } = useHandleAppTheme();

  return (
    <IconButton
      icon={theme === AppTheme.DARK ? <SunOutlined /> : <MoonOutlined />}
      onClick={onToggleTheme}
    />
  );
};
