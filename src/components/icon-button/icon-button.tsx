import { FC, ReactNode } from 'react';
import { Button } from 'antd';

import styles from './icon-button.module.scss';

interface IconButtonProps {
  icon: ReactNode;
  onClick: () => void;
}

export const IconButton: FC<IconButtonProps> = ({ icon, onClick }) => {
  return (
    <Button
      icon={icon}
      htmlType="button"
      onClick={onClick}
      className={styles.button}
    />
  );
};
