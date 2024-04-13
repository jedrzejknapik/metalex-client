import { FC } from 'react';
import { InputNumber, InputNumberProps } from 'antd';

export const FormNumber: FC<InputNumberProps> = (props) => {
  return <InputNumber {...props} />;
};
