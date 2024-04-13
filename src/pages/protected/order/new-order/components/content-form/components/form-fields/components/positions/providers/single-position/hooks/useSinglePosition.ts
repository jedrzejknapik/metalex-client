import { useContext } from 'react';

import { SinglePositionContext } from '../single-position-context';

export const useSinglePosition = () => {
  const singlePosition = useContext(SinglePositionContext);

  if (!singlePosition) {
    throw new Error(
      'useSinglePosition must be used within SinglePositionContext',
    );
  }

  return singlePosition;
};
