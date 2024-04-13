import { FC } from 'react';

import { FormRadio } from '@forms';

import { Card } from '@components/card/card';
import Typography from '@components/typography';

import { Thickness } from '@types';

import styles from './thickness-option.module.scss';

export const ThicknessOption: FC<Thickness> = ({ id, name }) => {
  return (
    <FormRadio value={id}>
      <Card classNames={{ body: styles.body }}>
        <Typography.Text className={styles.text}>{name}</Typography.Text>
      </Card>
    </FormRadio>
  );
};
