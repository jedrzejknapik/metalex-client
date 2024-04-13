import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';

import Typography from '@components/typography';

import styles from './step-titles.module.scss';

export const ChooseCategoryTitle: FC = () => {
  const { LL } = useI18nContext();

  return (
    <Typography.Text className={styles.text}>
      {LL.ORDER.NEW_ORDER.STEPS.CHOOSE_PROFILE()}
    </Typography.Text>
  );
};

export const OrderFormTitle: FC = () => {
  const { LL } = useI18nContext();

  return (
    <Typography.Text className={styles.text}>
      {LL.ORDER.NEW_ORDER.STEPS.FILL_THE_FORM()}
    </Typography.Text>
  );
};

export const SummaryTitle: FC = () => {
  const { LL } = useI18nContext();

  return (
    <Typography.Text className={styles.text}>
      {LL.ORDER.NEW_ORDER.STEPS.SUMMARY()}
    </Typography.Text>
  );
};
