import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from '@api/query-keys';

import { Roll } from '@types';

import { getRollList } from './api';

export const useGetRollList = () => {
  return useQuery<Roll[]>({
    queryKey: [QueryKeys.ROLL_LIST],
    queryFn: getRollList,
  });
};
