import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from '@api/query-keys';

import { Color } from '@types';

import { getColorList } from './api';

export const useGetColorList = () => {
  return useQuery<Color[]>({
    queryKey: [QueryKeys.COLOR_LIST],
    queryFn: getColorList,
  });
};
