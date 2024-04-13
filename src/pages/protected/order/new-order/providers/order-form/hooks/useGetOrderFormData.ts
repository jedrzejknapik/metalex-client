import { useGetColorList } from '@api/color';
import { useGetCustomerList } from '@api/customer';
import { useGetMaterialList } from '@api/material';
import { useGetProfileList } from '@api/profile';
import { useGetRollList } from '@api/roll';
import { useGetThicknessList } from '@api/thickness';

export const useGetOrderFormData = () => {
  const profiles = useGetProfileList();
  const colors = useGetColorList();
  const customers = useGetCustomerList();
  const thickness = useGetThicknessList();
  const materials = useGetMaterialList();
  const rolls = useGetRollList();

  return {
    profiles,
    colors,
    thickness,
    materials,
    rolls,
    customers,
  };
};
