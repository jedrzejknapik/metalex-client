import { FC } from 'react';
import { motion, useIsPresent } from 'framer-motion';

import { PAGE_LOADER_VARIANTS } from './page-loader-variants';

import styles from './page-loader.module.scss';

export const PageLoader: FC = () => {
  const isPresent = useIsPresent();

  return (
    <motion.div
      {...PAGE_LOADER_VARIANTS}
      style={{ originX: isPresent ? 0 : 1 }}
      className={styles.loader}
    />
  );
};
