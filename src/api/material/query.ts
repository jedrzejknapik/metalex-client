import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from '@api/query-keys';

import { Material } from '@types';

import { getMaterialList } from './api';

export const useGetMaterialList = () => {
  return useQuery<Material[]>({
    queryKey: [QueryKeys.MATERIAL_LIST],
    queryFn: getMaterialList,
  });
};
