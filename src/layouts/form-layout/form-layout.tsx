import { FC, PropsWithChildren } from "react";

import styles from "./form-layout.module.scss";

export const FormLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
