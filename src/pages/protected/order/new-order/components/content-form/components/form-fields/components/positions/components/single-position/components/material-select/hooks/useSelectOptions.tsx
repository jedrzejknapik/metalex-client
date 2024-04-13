import { useOrderForm } from '@pages/protected/order/new-order/providers';

import { DefaultOptionType } from 'antd/es/select';

import { Material } from '@types';

import { MaterialLabel } from '../components';

export const useSelectOptions = () => {
  const { materials } = useOrderForm();

  const options: DefaultOptionType[] = materials.map((material: Material) => ({
    value: material.id,
    label: <MaterialLabel {...material} />,
  }));

  return {
    options,
  };
};
