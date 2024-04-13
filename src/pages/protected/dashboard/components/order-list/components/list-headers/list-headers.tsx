import { FC } from 'react';

import Typography from '@components/typography';

import { useListHeaders } from './hooks';

import { GridLayout } from '../grid-layout/grid-layout';

import styles from './list-headers.module.scss';

export const ListHeaders: FC = () => {
  const { headers } = useListHeaders();

  return (
    <GridLayout className={styles.container}>
      {headers.map(({ id, name }) => (
        <li className={styles.header} key={id}>
          <Typography.Text>{name}</Typography.Text>
        </li>
      ))}
    </GridLayout>
  );
};
