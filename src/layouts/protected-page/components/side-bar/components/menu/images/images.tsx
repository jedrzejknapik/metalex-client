import { HomeOutlined, UserOutlined } from '@ant-design/icons';

import styles from './images.module.scss';
import { FC } from 'react';

export const User: FC = () => <UserOutlined className={styles.image} />;
export const Dashboard: FC = () => <HomeOutlined className={styles.image} />;
