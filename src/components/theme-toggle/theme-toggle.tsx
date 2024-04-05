import { FC } from 'react';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';

import { Button } from '@components/button/button';

import { AppTheme } from '@types';

import { useHandleAppTheme } from './hooks';

export const ThemeToggle: FC = () => {
  const { theme, onToggleTheme } = useHandleAppTheme();

  return (
    <Button
      icon={theme === AppTheme.DARK ? <SunOutlined /> : <MoonOutlined />}
      onClick={onToggleTheme}
    />
  );
};
