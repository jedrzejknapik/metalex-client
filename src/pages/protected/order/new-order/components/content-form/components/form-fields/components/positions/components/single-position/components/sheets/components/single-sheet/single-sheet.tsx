import { FC } from 'react';

import {
  MetersInput,
  FoiledSwitch,
  QuantityInput,
  DeleteButton,
} from './components';

import styles from './single-sheet.module.scss';

export const SingleSheet: FC = () => {
  return (
    <div className={styles.container}>
      <QuantityInput />
      <MetersInput />
      <FoiledSwitch />
      <DeleteButton />
    </div>
  );
};
