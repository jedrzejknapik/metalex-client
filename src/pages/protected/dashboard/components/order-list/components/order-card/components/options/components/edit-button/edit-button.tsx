import { FC } from 'react';
import { Link } from 'react-router-dom';

import { EditOutlined } from '@ant-design/icons';

import { useSingleOrder } from '@providers/single-order/hooks';

import { Button } from '@components/button/button';

import { PROTECTED_ROUTES } from '@routes';

export const EditButton: FC = () => {
  const { orderNr } = useSingleOrder();

  return (
    <Link to={PROTECTED_ROUTES.ORDER.EDIT_ORDER(orderNr)}>
      <Button icon={<EditOutlined />} />
    </Link>
  );
};
