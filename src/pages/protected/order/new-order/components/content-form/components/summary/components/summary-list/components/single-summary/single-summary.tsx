import { FC } from 'react';

import Typography from '@components/typography';

import { ListAnimation } from '@animations/list-animation/list-animation';
import { ListItemAnimation } from '@animations/list-item-animation/list-item-animation';

import { Summary } from '../../summary.types';

import styles from './single-summary.module.scss';

type SingleSummary = Summary & {
  index: number;
};

export const SingleSummary: FC<SingleSummary> = (props) => {
  const { hasChildren, id, index } = props;

  if (!hasChildren) {
    const { label, value } = props;

    return (
      <ListItemAnimation index={index} key={id} className={styles.item}>
        <Typography.Text>{label}</Typography.Text>
        <span className={styles.value}>{value}</span>
      </ListItemAnimation>
    );
  }

  const { children, heading, classNames } = props;

  return (
    <ListItemAnimation index={index} key={id} className={classNames?.item}>
      {heading}
      <ListAnimation className={classNames?.container}>
        {children.map((props: Summary, index) => (
          <SingleSummary
            key={`${index}-${props.id}`}
            {...props}
            index={index}
          />
        ))}
      </ListAnimation>
    </ListItemAnimation>
  );
};
