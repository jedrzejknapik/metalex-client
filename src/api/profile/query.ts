import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from '@api/query-keys';

import { Profile } from '@types';

import { getProfileList } from './api';

export const useGetProfileList = () => {
  return useQuery<Profile[]>({
    queryKey: [QueryKeys.PROFILE_LIST],
    queryFn: getProfileList,
  });
};
