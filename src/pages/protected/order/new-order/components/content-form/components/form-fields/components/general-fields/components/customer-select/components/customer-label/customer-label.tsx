import { FC } from 'react';

import { Customer } from '@types';

import Typography from '@components/typography';
import { Avatar } from '@components/avatar/avatar';

import styles from './customer-label.module.scss';

export const CustomerLabel: FC<Customer> = ({
  firstName,
  lastName,
  imageRef,
}) => {
  return (
    <div className={styles.container}>
      <Avatar src={imageRef} alt={`${firstName} ${lastName}`} />
      <Typography.Text>
        {firstName} {lastName}
      </Typography.Text>
    </div>
  );
};
