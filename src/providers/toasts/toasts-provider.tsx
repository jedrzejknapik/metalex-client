import { FC, PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';

import { ToastsContext } from './toasts-context';

const CLOSE_TIME = 1_500;

export const ToastProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ToastsContext.Provider value={undefined}>
      <ToastContainer
        hideProgressBar
        autoClose={CLOSE_TIME}
        closeButton={false}
      />
      {children}
    </ToastsContext.Provider>
  );
};
