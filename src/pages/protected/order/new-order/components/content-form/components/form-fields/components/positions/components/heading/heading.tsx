import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';

import { PlusOutlined } from '@ant-design/icons';

import Typography from '@components/typography';
import { Button } from '@components/button/button';

import styles from './heading.module.scss';

interface HeadingProps {
  onClickAdd: () => void;
}

export const Heading: FC<HeadingProps> = ({ onClickAdd }) => {
  const { LL } = useI18nContext();

  return (
    <div className={styles.container}>
      <Typography.Title level={4}>
        {LL.ORDER.NEW_ORDER.FILL_THE_FORM.FIELDS.POSITIONS.HEADING()}
      </Typography.Title>
      <Button
        onClick={(event) => {
          event.preventDefault();
          onClickAdd();
        }}
        icon={<PlusOutlined />}
      />
    </div>
  );
};
