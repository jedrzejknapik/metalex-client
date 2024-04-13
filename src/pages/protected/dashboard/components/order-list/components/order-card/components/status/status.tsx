import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';
import cn from 'classnames';

import { useSingleOrder } from '@providers/single-order/hooks';

import Typography from '@components/typography';

import { OrderStatus } from '@types';

import styles from './status.module.scss';

export const Status: FC = () => {
  const { status } = useSingleOrder();
  const { LL } = useI18nContext();

  return (
    <div className={styles.container}>
      <Typography.Text
        className={cn(styles.text, {
          [styles.fulfilled]: status === OrderStatus.FULFILLED,
          [styles.pending]: status === OrderStatus.PENDING,
          [styles.unfulfilled]: status === OrderStatus.UNFULFILLED,
        })}
      >
        {status === OrderStatus.FULFILLED && LL.STATUSES.FULFILLED()}
        {status === OrderStatus.PENDING && LL.STATUSES.PENDING()}
        {status === OrderStatus.UNFULFILLED && LL.STATUSES.UNFULFILLED()}
      </Typography.Text>
    </div>
  );

  return;
};
