import { FC } from 'react';

import { ImageProps, Image as ImageANTD } from 'antd';

const URL = import.meta.env.VITE_ASSETS_URL;

export const Image: FC<ImageProps> = (props) => {
  return <ImageANTD {...props} src={`${URL}${props.src}`} />;
};
