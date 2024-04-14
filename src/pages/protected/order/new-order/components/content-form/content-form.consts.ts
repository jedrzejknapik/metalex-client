import { CreateOrderFormFields, CreateOrderPayload } from '@types';

export const INITIAL_CONTENT_FORM_VALUES: Omit<
  CreateOrderPayload,
  CreateOrderFormFields.PRICE | CreateOrderFormFields.PRODUCTS_QUANTITY
> = {
  customerId: '',
  createdAt: '',
  orderNr: '',
  positions: [],
};
