import { ReactNode } from 'react';

export type Summary =
  | {
      id: string;
      hasChildren: true;
      children: Summary[];
      heading?: ReactNode;
      classNames?: {
        item?: string;
        container?: string;
      };
    }
  | {
      id: string;
      hasChildren: false;
      label: string;
      value: ReactNode;
      classNames?: {
        item?: string;
      };
    };
