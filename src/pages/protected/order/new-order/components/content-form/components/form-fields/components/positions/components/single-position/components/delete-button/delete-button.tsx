import { FC } from 'react';

import { DeleteOutlined } from '@ant-design/icons';

import { Button } from '@components/button/button';

import { useSinglePosition } from '../../../../providers';

export const DeleteButton: FC = () => {
  const { onClickRemove } = useSinglePosition();

  return <Button onClick={onClickRemove} icon={<DeleteOutlined />} />;
};
