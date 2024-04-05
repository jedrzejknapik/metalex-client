import { FC } from 'react';
import { BellOutlined } from '@ant-design/icons';

import { Button } from '@components/button/button';

export const Notifications: FC = () => {
  return <Button icon={<BellOutlined />} />;
};
