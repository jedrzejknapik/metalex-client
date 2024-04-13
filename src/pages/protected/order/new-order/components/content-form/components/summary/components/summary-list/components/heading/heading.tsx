import { FC } from 'react';

import Typography from '@components/typography';

import styles from './heading.module.scss';

interface HeadingProps {
  title: string;
}

export const Heading: FC<HeadingProps> = ({ title }) => {
  return (
    <Typography.Title level={4} className={styles.container}>
      {title}
    </Typography.Title>
  );
};
