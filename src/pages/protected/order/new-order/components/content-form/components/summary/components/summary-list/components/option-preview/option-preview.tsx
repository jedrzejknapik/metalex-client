import { FC } from 'react';

import Typography from '@components/typography';
import { Avatar } from '@components/avatar/avatar';

import styles from './option-preview.module.scss';

interface OptionPreviewProps {
  imageRef: string;
  value: string;
}

export const OptionPreview: FC<OptionPreviewProps> = ({ imageRef, value }) => {
  return (
    <div className={styles.container}>
      <Avatar src={imageRef} alt={value} className={styles.avatar} />
      <Typography.Text>{value}</Typography.Text>
    </div>
  );
};
