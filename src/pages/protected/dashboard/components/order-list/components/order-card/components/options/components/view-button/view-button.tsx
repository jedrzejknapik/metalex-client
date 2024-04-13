import { FC } from 'react';
import { Link } from 'react-router-dom';

import { EyeOutlined } from '@ant-design/icons';

import { useSingleOrder } from '@providers/single-order/hooks';

import { Button } from '@components/button/button';

import { PROTECTED_ROUTES } from '@routes';

export const ViewButton: FC = () => {
  const { orderNr } = useSingleOrder();

  return (
    <Link to={PROTECTED_ROUTES.ORDER.VIEW_ORDER(orderNr)}>
      <Button icon={<EyeOutlined />} />
    </Link>
  );
};
