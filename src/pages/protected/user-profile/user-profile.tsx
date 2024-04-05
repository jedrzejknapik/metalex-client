import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';

import { Metatag } from '@components/metatag/metatag';

export const UserProfile: FC = () => {
  const { LL } = useI18nContext();

  return (
    <>
      <Metatag title={LL.USER_PROFILE.PAGE_TITLE()} />
      <p>User Profile</p>
    </>
  );
};
