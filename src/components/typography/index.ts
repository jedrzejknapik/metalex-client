import { FC } from 'react';

import { TitleProps } from 'antd/es/typography/Title';
import { TextProps } from 'antd/es/typography/Text';

import { Title } from './title/title';
import { Text } from './text/text';

interface TypographyType {
  Title: FC<TitleProps>;
  Text: FC<TextProps>;
}

export const Typography = {} as TypographyType;

Typography.Title = Title;
Typography.Text = Text;

export default Typography;
