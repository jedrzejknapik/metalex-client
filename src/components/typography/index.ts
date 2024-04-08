import { FC } from 'react';

import { TitleProps } from 'antd/es/typography/Title';

import { Title } from './title/title';

interface TypographyType {
  Title: FC<TitleProps>;
}

export const Typography = {} as TypographyType;

Typography.Title = Title;

export default Typography;
