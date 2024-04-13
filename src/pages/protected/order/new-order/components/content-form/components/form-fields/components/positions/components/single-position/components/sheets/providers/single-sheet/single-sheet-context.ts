import { createContext } from 'react';

export interface SingleSheetContextProps {
  fieldName: number;
  onClickRemove: () => void;
}

export const SingleSheetContext = createContext<
  SingleSheetContextProps | undefined
>(undefined);
