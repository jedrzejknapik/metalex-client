import { useOrderForm } from '@pages/protected/order/new-order/providers';

import { DefaultOptionType } from 'antd/es/select';

import { Roll } from '@types';

import { RollLabel } from '../components';

export const useSelectOptions = () => {
  const { rolls } = useOrderForm();

  const options: DefaultOptionType[] = rolls.map((roll: Roll) => ({
    value: roll.id,
    label: <RollLabel {...roll} />,
  }));

  return {
    options,
  };
};
