import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';

import { Metatag } from '@components/metatag/metatag';

export const Dashboard: FC = () => {
  const { LL } = useI18nContext();

  return (
    <>
      <Metatag title={LL.DASHBOARD.PAGE_TITLE()} />
      <p>Dashboard</p>
    </>
  );
};
