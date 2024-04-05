import { FC } from 'react';
import { Helmet, HelmetProps } from 'react-helmet';

export const Metatag: FC<HelmetProps> = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};
