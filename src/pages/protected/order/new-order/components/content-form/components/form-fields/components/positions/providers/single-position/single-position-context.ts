import { createContext } from 'react';

export interface SinglePositionContextProps {
  fieldName: number;
  onClickRemove: () => void;
}

export const SinglePositionContext = createContext<
  SinglePositionContextProps | undefined
>(undefined);
