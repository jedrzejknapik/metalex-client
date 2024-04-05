import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';

import { NonProtectedPage } from '@layouts/non-protected-page/non-protected-page';

import { ForgotPasswordForm, ForgotPasswordImage } from './components';

export const ForgotPassword: FC = () => {
  const { LL } = useI18nContext();

  return (
    <NonProtectedPage
      metaTitle={LL.FORGOT_PASSWORD.PAGE_TITLE()}
      leftSide={<ForgotPasswordImage />}
      rightSide={<ForgotPasswordForm />}
    />
  );
};
