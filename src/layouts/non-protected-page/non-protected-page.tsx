import { FC, ReactNode } from 'react';

import { Metatag } from '@components/metatag/metatag';
import { PageLoader } from '@components/page-loader/page-loader';

import { Logo, Navigation, SectionDivider } from './components';

import styles from './non-protected-page.module.scss';

interface NonProtectedPageProps {
  metaTitle: string;
  leftSide: ReactNode;
  rightSide: ReactNode;
}

export const NonProtectedPage: FC<NonProtectedPageProps> = ({
  metaTitle,
  leftSide,
  rightSide,
}) => {
  return (
    <>
      <Metatag title={metaTitle} />
      <div className={styles.container}>
        <Navigation />
        <Logo />
        <div className={styles.content}>
          {leftSide}
          <SectionDivider />
          {rightSide}
        </div>
      </div>
      <PageLoader />
    </>
  );
};
