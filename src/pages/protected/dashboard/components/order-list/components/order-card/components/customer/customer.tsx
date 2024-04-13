import { FC } from 'react';

import { useSingleOrder } from '@providers/single-order/hooks';

import { Avatar } from '@components/avatar/avatar';
import Typography from '@components/typography';

import styles from './customer.module.scss';

export const Customer: FC = () => {
  const { customer } = useSingleOrder();
  const { firstName, lastName, imageRef } = customer;

  return (
    <div className={styles.container}>
      <Avatar src={imageRef} alt={`${firstName} ${lastName}`} />
      <Typography.Text>
        {firstName} {lastName}
      </Typography.Text>
    </div>
  );
};
