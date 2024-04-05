import { FC } from 'react';
import { LogoutOutlined } from '@ant-design/icons';

import { useAuth } from '@providers/auth/hooks';

import { Button } from '@components/button/button';

export const SignOut: FC = () => {
  const { onSignOutUser } = useAuth();

  return <Button icon={<LogoutOutlined />} onClick={onSignOutUser} />;
};
