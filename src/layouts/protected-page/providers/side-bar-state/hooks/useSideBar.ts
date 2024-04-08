import { useState } from 'react';

const TOOLBAR_KEY = 'toolbar';

const getSavedToolbarConfiguration = (): boolean => {
  const toolbar = localStorage.getItem(TOOLBAR_KEY);

  return toolbar === 'true';
};

const setNewToolbarConfiguration = (newValue: boolean) => {
  localStorage.setItem(TOOLBAR_KEY, `${newValue}`);
};

export const useSideBar = () => {
  const [collapsed, setCollapsed] = useState(getSavedToolbarConfiguration());

  const onToggleToolBar = () => {
    setCollapsed((prevState) => {
      const newValue = !prevState;

      setNewToolbarConfiguration(newValue);
      return newValue;
    });
  };

  return {
    collapsed,
    onToggleToolBar,
  };
};
