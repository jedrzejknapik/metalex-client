import { FC } from 'react';

import { Roll } from '@types';

import Typography from '@components/typography';

import styles from './roll-label.module.scss';

export const RollLabel: FC<Roll> = ({ name }) => {
  return (
    <div className={styles.container}>
      <Typography.Text>{name}</Typography.Text>
    </div>
  );
};
