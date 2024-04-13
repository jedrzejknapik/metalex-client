import { useOrderForm } from '@pages/protected/order/new-order/providers';

import { DefaultOptionType } from 'antd/es/select';

import { Color } from '@types';

import { ColorLabel } from '../components';

export const useSelectOptions = () => {
  const { colors } = useOrderForm();

  const options: DefaultOptionType[] = colors.map((color: Color) => ({
    value: color.id,
    label: <ColorLabel {...color} />,
  }));

  return {
    options,
  };
};
