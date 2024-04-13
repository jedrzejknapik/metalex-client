import { useOrderForm } from '@pages/protected/order/new-order/providers';

import { Customer, Color, Material, Roll, Profile, Thickness } from '@types';

export type NamesForFindFormValue =
  | Customer['id']
  | Color['id']
  | Material['id']
  | Roll['id']
  | Profile['id']
  | Thickness['id'];

interface CommonSearchKey {
  id: string;
}

export const useFindFormValue = () => {
  const { form } = useOrderForm();

  const getSelectedData = <Data extends CommonSearchKey>(
    name: NamesForFindFormValue,
    data: Data[],
  ) => {
    const value = form.getFieldValue(name);

    if (!value) {
      return;
    }

    return data.find(({ id }) => id === value);
  };

  return {
    getSelectedData,
  };
};
