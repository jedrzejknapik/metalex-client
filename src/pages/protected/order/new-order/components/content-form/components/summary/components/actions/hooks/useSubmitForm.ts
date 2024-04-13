import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useI18nContext } from '@i18n/i18n-react';

import { useCreateOrder } from '@api/order/query';

import { useOrderForm } from '@pages/protected/order/new-order/providers';

import { PROTECTED_ROUTES } from '@routes';

import {
  CreateOrderFormFields,
  CreateOrderPayload,
  Position,
  Profile,
} from '@types';

const mapPayloadPositions = (
  positions: Position[],
  profileId: Profile['id'],
): Position[] => {
  return positions.map((props: Position) => ({
    ...props,
    profileId,
  }));
};

export const useSubmitForm = () => {
  const { LL } = useI18nContext();
  const { form } = useOrderForm();
  const navigate = useNavigate();
  const { mutateAsync: createOrder, isPending } = useCreateOrder();

  const isSubmitDisabled = isPending;

  const onSubmit = async () => {
    const profileId = form.getFieldValue(CreateOrderFormFields.PROFILE_ID);
    const date = form.getFieldValue(CreateOrderFormFields.DATE);
    const positions = form.getFieldValue(CreateOrderFormFields.POSITIONS);
    const customerId = form.getFieldValue(CreateOrderFormFields.CUSTOMER_ID);
    const orderNr = form.getFieldValue(CreateOrderFormFields.ORDER_NR);

    const payload: CreateOrderPayload = {
      customerId,
      date: new Date(date).toISOString(),
      orderNr,
      positions: mapPayloadPositions(positions, profileId),
    };

    try {
      await createOrder(payload);

      toast.success(LL.ORDER.NEW_ORDER.SUMMARY.RESPONSE.SUCCESS());
      navigate(PROTECTED_ROUTES.DASHBOARD());
    } catch (e) {
      toast.error(LL.ORDER.NEW_ORDER.SUMMARY.RESPONSE.FAILED());
    }
  };

  return {
    onSubmit,
    isSubmitDisabled,
  };
};
