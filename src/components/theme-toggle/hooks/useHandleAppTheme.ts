import { useEffect, useState } from 'react';

import { AppTheme } from '@types';

const getAppTheme = (): AppTheme => {
  const theme = localStorage.getItem('theme');

  return theme === AppTheme.DARK ? AppTheme.DARK : AppTheme.LIGHT;
};

export const useHandleAppTheme = () => {
  const [theme, setTheme] = useState(getAppTheme());

  useEffect(() => {
    if (theme === AppTheme.LIGHT) {
      document.documentElement.classList.remove(AppTheme.DARK);
      document.documentElement.classList.add(AppTheme.LIGHT);
    } else {
      document.documentElement.classList.remove(AppTheme.LIGHT);
      document.documentElement.classList.add(AppTheme.DARK);
    }
  }, [theme]);

  const onToggleTheme = () => {
    const newTheme = theme === AppTheme.DARK ? AppTheme.LIGHT : AppTheme.DARK;

    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return {
    theme,
    onToggleTheme,
  };
};
