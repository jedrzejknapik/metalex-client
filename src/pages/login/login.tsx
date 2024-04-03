import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Metatag } from '@components/metatag/metatag';

import { NotLoggedPageLayout } from '@layouts';

import {
  ForgotPassword,
  FormTitle,
  Illustration,
  LoginForm,
  Logo,
  SectionDivider,
} from './components';

import styles from './login.module.scss';

export const Login: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Metatag title={t('login.title')} />
      <NotLoggedPageLayout className={styles.container}>
        <Logo />
        <div className={styles.content}>
          <Illustration />
          <SectionDivider />
          <div className={styles.loginForm}>
            <FormTitle />
            <LoginForm />
            <ForgotPassword />
          </div>
        </div>
      </NotLoggedPageLayout>
    </>
  );
};
