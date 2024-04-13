import { FC, PropsWithChildren } from 'react';

import {
  SingleSheetContext,
  SingleSheetContextProps,
} from './single-sheet-context';

export const SingleSheetProvider: FC<
  PropsWithChildren<SingleSheetContextProps>
> = ({ children, ...props }) => {
  return (
    <SingleSheetContext.Provider value={props}>
      {children}
    </SingleSheetContext.Provider>
  );
};
