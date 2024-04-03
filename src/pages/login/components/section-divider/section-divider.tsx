import { Divider } from 'antd';
import { FC } from 'react';

import styles from './section-divider.module.scss';

export const SectionDivider: FC = () => {
  return <Divider type="vertical" className={styles.divider} />;
};
