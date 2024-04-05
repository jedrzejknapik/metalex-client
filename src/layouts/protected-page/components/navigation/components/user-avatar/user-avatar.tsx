import { FC } from 'react';
import { Avatar, Tooltip } from 'antd';
import { Link } from 'react-router-dom';

import { useUserSession } from '@providers/user-session/hooks';

import { PROTECTED_ROUTES } from '@routes';

import styles from './user-avatar.module.scss';

export const UserAvatar: FC = () => {
  const { username } = useUserSession();

  return (
    <Link to={PROTECTED_ROUTES.USER_PROFILE()}>
      <Tooltip title={username}>
        <Avatar
          shape="circle"
          src="https://randomuser.me/api/portraits/women/72.jpg"
          alt="user avatar"
          className={styles.avatar}
        />
      </Tooltip>
    </Link>
  );
};
