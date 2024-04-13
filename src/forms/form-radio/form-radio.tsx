import { FC } from 'react';
import cn from 'classnames';

import { Radio } from 'antd';
import { RadioButtonProps } from 'antd/es/radio/radioButton';

import styles from './form-radio.module.scss';

export const FormRadio: FC<RadioButtonProps> = (props) => {
  return (
    <Radio.Button {...props} className={cn(styles.button, props.className)}>
      {props.children}
    </Radio.Button>
  );
};
