import { FC } from 'react';
import cn from 'classnames';

import { DatePicker, DatePickerProps } from 'antd';

import styles from './form-date-picker.module.scss';

export const FormDatePicker: FC<DatePickerProps> = (props) => {
  return (
    <DatePicker {...props} className={cn(styles.picker, props.className)} />
  );
};
