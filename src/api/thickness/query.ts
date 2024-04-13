import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from '@api/query-keys';

import { Thickness } from '@types';

import { getThicknessList } from './api';

export const useGetThicknessList = () => {
  return useQuery<Thickness[]>({
    queryKey: [QueryKeys.THICKNESS_LIST],
    queryFn: getThicknessList,
  });
};
