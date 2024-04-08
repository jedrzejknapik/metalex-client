import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';

import { PageContent } from '@layouts/page-content/page-content';

import styles from './user-profile.module.scss';

export const UserProfile: FC = () => {
  const { LL } = useI18nContext();

  return (
    <>
      <PageContent
        heading={LL.USER_PROFILE.HEADING()}
        metaTitle={LL.USER_PROFILE.PAGE_TITLE()}
      >
        <div className={styles.testCard}></div>
      </PageContent>
    </>
  );
};
