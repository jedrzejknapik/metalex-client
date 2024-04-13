import { FC } from 'react';

import SvgSignOut from '@icons/sign-out';

import { useAuth } from '@providers/auth/hooks';

import { Button } from '@components/button/button';

export const SignOut: FC = () => {
  const { onSignOutUser } = useAuth();

  return <Button icon={<SvgSignOut />} onClick={onSignOutUser} />;
};
