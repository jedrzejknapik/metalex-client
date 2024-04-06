import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';

import { NonProtectedPage } from '@layouts/non-protected-page/non-protected-page';

import { NotFoundImage, NotFoundMessage } from './components';

export const NotFound: FC = () => {
  const { LL } = useI18nContext();

  return (
    <NonProtectedPage
      metaTitle={LL.NOT_FOUND.PAGE_TITLE()}
      leftSide={<NotFoundImage />}
      rightSide={<NotFoundMessage />}
    />
  );
};
