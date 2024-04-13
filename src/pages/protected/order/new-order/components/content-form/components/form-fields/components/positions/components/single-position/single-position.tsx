import { FC } from 'react';

import {
  ColorSelect,
  DeleteButton,
  DoubleSidedSwitch,
  FirstClassSwitch,
  GlossySwitch,
  MaterialSelect,
  RollSelect,
  Sheets,
  ThicknessSelect,
  WidthInput,
} from './components';

import styles from './single-position.module.scss';

export const SinglePosition: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstRow}>
        <div className={styles.firstColumn}>
          <WidthInput />
          <ColorSelect />
        </div>
        <div className={styles.secondColumn}>
          <MaterialSelect />
          <RollSelect />
        </div>
        <div className={styles.switches}>
          <GlossySwitch />
          <FirstClassSwitch />
          <DoubleSidedSwitch />
        </div>
        <ThicknessSelect />
        <DeleteButton />
      </div>
      <div className={styles.secondRow}>
        <Sheets />
      </div>
    </div>
  );
};
