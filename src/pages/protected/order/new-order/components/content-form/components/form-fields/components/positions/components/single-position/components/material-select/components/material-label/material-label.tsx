import { FC } from 'react';

import { Material } from '@types';

import Typography from '@components/typography';
import { Avatar } from '@components/avatar/avatar';

import styles from './material-label.module.scss';

export const MaterialLabel: FC<Material> = ({ name, imageRef }) => {
  return (
    <div className={styles.container}>
      <Avatar src={imageRef} alt={name} />
      <Typography.Text>{name}</Typography.Text>
    </div>
  );
};
