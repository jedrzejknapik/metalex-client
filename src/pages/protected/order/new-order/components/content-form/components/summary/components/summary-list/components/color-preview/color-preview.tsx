import { FC } from 'react';

import { Color } from '@types';

import Typography from '@components/typography';
import { Avatar } from '@components/avatar/avatar';

import styles from './color-preview.module.scss';

export const ColorPreview: FC<Color> = ({ imageRef, name, value }) => {
  return (
    <div className={styles.container}>
      {imageRef ? (
        <Avatar src={imageRef} alt={name} />
      ) : (
        <div className={styles.avatar} style={{ backgroundColor: value }} />
      )}
      <Typography.Text>{name}</Typography.Text>
    </div>
  );
};
