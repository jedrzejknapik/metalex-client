import { FC } from 'react';

import { Select, SelectProps } from 'antd';

import styles from './form-select.module.scss';

export const FormSelect: FC<SelectProps> = (props) => {
  return <Select className={styles.select} {...props} />;
};
