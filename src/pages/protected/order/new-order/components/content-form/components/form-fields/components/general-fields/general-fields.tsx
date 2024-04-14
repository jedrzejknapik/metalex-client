import { FC } from 'react';

import {
  CustomerSelect,
  DatePicker,
  OrderNrInput,
  PriceInput,
  ProductQuantityInput,
} from './components';

import styles from './general-fields.module.scss';

export const GeneralFields: FC = () => {
  return (
    <div className={styles.container}>
      <OrderNrInput />
      <DatePicker />
      <CustomerSelect />
      <ProductQuantityInput />
      <PriceInput />
    </div>
  );
};
