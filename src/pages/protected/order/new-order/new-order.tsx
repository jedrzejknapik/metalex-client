import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';

import { PageContent } from '@layouts/page-content/page-content';

import { OrderFormProvider, StepperProvider } from './providers';

import { ContentForm, Stepper } from './components';

import styles from './new-order.module.scss';

export const NewOrder: FC = () => {
  const { LL } = useI18nContext();

  return (
    <>
      <PageContent
        heading={LL.ORDER.NEW_ORDER.HEADING()}
        metaTitle={LL.ORDER.NEW_ORDER.PAGE_TITLE()}
      >
        <StepperProvider>
          <div className={styles.container}>
            <Stepper />
            <OrderFormProvider>
              <ContentForm />
            </OrderFormProvider>
          </div>
        </StepperProvider>
      </PageContent>
    </>
  );
};
