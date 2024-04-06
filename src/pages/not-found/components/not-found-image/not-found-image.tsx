import { FC } from 'react';

import SvgNotFoundImage from '@images/not-found-image';

import styles from './not-found-image.module.scss';

export const NotFoundImage: FC = () => {
  return <SvgNotFoundImage className={styles.image} />;
};
