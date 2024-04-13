import { FC } from 'react';

import { CreateOrderFormFields, Profile } from '@types';

import { FormRadio } from '@forms';

import Typography from '@components/typography';
import { Card } from '@components/card/card';
import { Image } from '@components/image/image';

import styles from './profile-option.module.scss';

export const ProfileOption: FC<Profile> = ({ id, imageRef, name }) => {
  return (
    <FormRadio
      value={id}
      name={CreateOrderFormFields.PROFILE_ID}
      className={styles.container}
    >
      <Card className={styles.card} classNames={{ body: styles.body }}>
        <Image src={imageRef} preview={false} className={styles.image} />
        <Typography.Text className={styles.text}>{name}</Typography.Text>
      </Card>
    </FormRadio>
  );
};
