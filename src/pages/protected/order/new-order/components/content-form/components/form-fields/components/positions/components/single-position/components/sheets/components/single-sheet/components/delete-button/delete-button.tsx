import { FC } from 'react';

import { DeleteOutlined } from '@ant-design/icons';

import { Button } from '@components/button/button';

import { useSingleSheet } from '../../../../providers';

export const DeleteButton: FC = () => {
  const { onClickRemove } = useSingleSheet();

  return <Button onClick={onClickRemove} icon={<DeleteOutlined />} />;
};
