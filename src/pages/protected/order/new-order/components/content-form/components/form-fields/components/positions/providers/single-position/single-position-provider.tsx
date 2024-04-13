import { FC, PropsWithChildren } from 'react';

import {
  SinglePositionContext,
  SinglePositionContextProps,
} from './single-position-context';

export const SinglePositionProvider: FC<
  PropsWithChildren<SinglePositionContextProps>
> = ({ children, ...props }) => {
  return (
    <SinglePositionContext.Provider value={props}>
      {children}
    </SinglePositionContext.Provider>
  );
};
