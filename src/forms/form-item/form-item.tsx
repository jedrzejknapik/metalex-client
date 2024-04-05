import { FC, PropsWithChildren } from 'react';
import { Form, FormItemProps } from 'antd';

import styles from './form-item.module.scss';

export const FormItem: FC<PropsWithChildren<FormItemProps>> = (props) => {
  return (
    <Form.Item {...props} className={styles.item}>
      {props.children}
    </Form.Item>
  );
};
