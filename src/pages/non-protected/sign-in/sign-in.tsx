import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';

import { NonProtectedPage } from '@layouts/non-protected-page/non-protected-page';

import { SignInForm, SignInImage } from './components';

export const SignIn: FC = () => {
  const { LL } = useI18nContext();

  return (
    <NonProtectedPage
      metaTitle={LL.SIGN_IN.PAGE_TITLE()}
      leftSide={<SignInImage />}
      rightSide={<SignInForm />}
    />
  );
};
