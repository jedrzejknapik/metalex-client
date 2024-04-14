import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';

import { useSingleOrder } from '@providers/single-order/hooks';

import { PageContent } from '@layouts/page-content/page-content';

import { getReadableDateFormat } from '@utils/get-readable-date-format';

import styles from './view-order.module.scss';

export const ViewOrder: FC = () => {
  const { LL } = useI18nContext();
  const { createdAt, customer, orderNr, price, status, productQuantity } =
    useSingleOrder();

  return (
    <>
      <PageContent
        heading={LL.ORDER.VIEW_ORDER.HEADING({ orderNr })}
        metaTitle={LL.ORDER.VIEW_ORDER.PAGE_TITLE({ orderNr })}
      >
        <div className={styles.testCard}>
          <p>Order ID: {orderNr}</p>
          <p>Created AT: {getReadableDateFormat(createdAt)}</p>
          <p>
            Customer: {customer.firstName} {customer.lastName}
          </p>
          <p>Price: {price}</p>
          <p>Status: {status}</p>
          <p>Product Quantity: {productQuantity}</p>
        </div>
      </PageContent>
    </>
  );
};
