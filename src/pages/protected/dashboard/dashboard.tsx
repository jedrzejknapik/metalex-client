import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';

import { PageContent } from '@layouts/page-content/page-content';

import { Heading, OrderList } from './components';

import { OrderListProvider } from './providers';

import styles from './dashboard.module.scss';

export const Dashboard: FC = () => {
  const { LL } = useI18nContext();

  return (
    <>
      <PageContent
        heading={LL.DASHBOARD.HEADING()}
        metaTitle={LL.DASHBOARD.PAGE_TITLE()}
      >
        <div className={styles.content}>
          <Heading />
          <OrderListProvider>
            <OrderList />
          </OrderListProvider>
        </div>
      </PageContent>
    </>
  );
};
