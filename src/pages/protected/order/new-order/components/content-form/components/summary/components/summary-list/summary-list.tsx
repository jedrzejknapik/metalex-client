import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';

import { ListAnimation } from '@animations/list-animation/list-animation';

import { useGetSummaryFields } from './hooks';

import { Heading, SingleSummary } from './components';

import { Summary } from './summary.types';

import styles from './summary-list.module.scss';

export const SummaryList: FC = () => {
  const { LL } = useI18nContext();
  const { fields } = useGetSummaryFields();

  return (
    <div className={styles.container}>
      <Heading title={LL.ORDER.NEW_ORDER.SUMMARY.COMMON_INFORMATION()} />
      <ListAnimation className={styles.list}>
        {fields.map((props: Summary, index) => (
          <SingleSummary
            key={`${index}-${props.id}`}
            {...props}
            index={index}
          />
        ))}
      </ListAnimation>
    </div>
  );
};
