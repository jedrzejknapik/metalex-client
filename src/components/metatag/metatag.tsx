import { FC } from "react";
import { Helmet } from "react-helmet";

interface MetatagProps {
  title: string;
}

export const Metatag: FC<MetatagProps> = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};
