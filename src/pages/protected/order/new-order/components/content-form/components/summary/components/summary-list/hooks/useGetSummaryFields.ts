import { Summary } from '../summary.types';

import {
  useGetCustomer,
  useGetDate,
  useGetOrderNr,
  useGetPrice,
  useGetProductQuantity,
  useGetProfile,
} from './general-fields';

import { useGetPositions } from './positions';

export const useGetSummaryFields = () => {
  const fields: Summary[] = [];

  const customer = useGetCustomer();

  if (customer) {
    fields.push(customer);
  }

  const orderNr = useGetOrderNr();

  if (orderNr) {
    fields.push(orderNr);
  }

  const profile = useGetProfile();

  if (profile) {
    fields.push(profile);
  }

  const date = useGetDate();

  if (date) {
    fields.push(date);
  }

  const price = useGetPrice();

  if (price) {
    fields.push(price);
  }

  const productQuantity = useGetProductQuantity();

  if (productQuantity) {
    fields.push(productQuantity);
  }

  const positions = useGetPositions();

  if (positions) {
    fields.push(positions);
  }

  return {
    fields,
  };
};
