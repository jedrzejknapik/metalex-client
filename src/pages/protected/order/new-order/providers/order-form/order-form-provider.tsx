import { FC, PropsWithChildren } from 'react';
import { Form } from 'antd';

import { CreateOrderPayload } from '@types';

import { OrderFormContext, OrderFormContextProps } from './order-form-context';

import { useGetOrderFormData } from './hooks';

export const OrderFormProvider: FC<PropsWithChildren> = ({ children }) => {
  const [form] = Form.useForm<CreateOrderPayload>();
  const { colors, materials, profiles, rolls, thickness, customers } =
    useGetOrderFormData();

  const isLoading =
    !colors.data ||
    !materials.data ||
    !profiles.data ||
    !rolls.data ||
    !thickness.data ||
    !customers.data;

  if (isLoading) {
    return <p>Loading</p>;
  }

  const value: OrderFormContextProps = {
    colors: colors.data,
    materials: materials.data,
    profiles: profiles.data,
    rolls: rolls.data,
    thickness: thickness.data,
    customers: customers.data,
    form,
  };

  return (
    <OrderFormContext.Provider value={value}>
      {children}
    </OrderFormContext.Provider>
  );
};
