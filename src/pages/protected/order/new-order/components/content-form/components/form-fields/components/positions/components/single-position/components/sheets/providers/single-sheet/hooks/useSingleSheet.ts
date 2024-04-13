import { useContext } from 'react';

import { SingleSheetContext } from '../single-sheet-context';

export const useSingleSheet = () => {
  const singleSheet = useContext(SingleSheetContext);

  if (!singleSheet) {
    throw new Error('useSingleSheet must be used within SingleSheetContext');
  }

  return singleSheet;
};
