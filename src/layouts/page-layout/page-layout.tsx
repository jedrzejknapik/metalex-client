import { FC, PropsWithChildren } from "react";
import {
  Breadcrumbs,
  BreadcrumbsProps,
  PageTitle,
  PageTitleProps,
} from "./components";

import styles from "./page-layout.module.scss";

type PageLayoutProps = PageTitleProps & Partial<BreadcrumbsProps>;

export const PageLayout: FC<PropsWithChildren<PageLayoutProps>> = ({
  title,
  breadcrumbs,
  children,
}) => {
  return (
    <div>
      <div className={styles.heading}>
        <PageTitle title={title} />
        {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
      </div>
      {children}
    </div>
  );
};
