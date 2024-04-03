import { FC } from 'react';

import { Input, InputProps } from 'antd';

import styles from './form-input.module.scss';

export const FormInput: FC<InputProps> = (props) => {
  return <Input {...props} className={styles.input} />;
};
