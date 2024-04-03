import { Input, InputProps } from 'antd';
import { FC } from 'react';

import styles from './form-password.module.scss';

export const FormPassword: FC<InputProps> = (props) => {
  return <Input.Password {...props} className={styles.input} />;
};
