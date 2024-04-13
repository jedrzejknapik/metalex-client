import { FC, PropsWithChildren } from 'react';

import styles from './form-actions.module.scss';

export const FormActions: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
