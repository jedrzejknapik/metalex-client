import { createContext } from 'react';

import {
  Color,
  CreateOrderPayload,
  Customer,
  Material,
  Profile,
  Roll,
  Thickness,
} from '@types';
import { FormInstance } from 'antd';

export interface OrderFormContextProps {
  profiles: Profile[];
  colors: Color[];
  thickness: Thickness[];
  materials: Material[];
  rolls: Roll[];
  customers: Customer[];
  form: FormInstance<CreateOrderPayload>;
}

export const OrderFormContext = createContext<
  OrderFormContextProps | undefined
>(undefined);
