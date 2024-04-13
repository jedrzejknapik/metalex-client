import { FC } from 'react';
import cn from 'classnames';

import { AvatarProps, Avatar as AvatarANTD } from 'antd';

import styles from './avatar.module.scss';

const URL = import.meta.env.VITE_ASSETS_URL;

export const Avatar: FC<AvatarProps> = (props) => {
  return (
    <AvatarANTD
      shape="circle"
      {...props}
      src={`${URL}${props.src}`}
      className={cn(styles.avatar, props.className)}
    />
  );
};
