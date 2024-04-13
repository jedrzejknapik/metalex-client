import { useI18nContext } from '@i18n/i18n-react';
import { v4 as uuidv4 } from 'uuid';

import { useOrderForm } from '@pages/protected/order/new-order/providers';

import { CreateOrderFormFields, Position } from '@types';

import { useGetPositionFields } from './useGetPositionFields';

import { Summary } from '../../summary.types';
import { Heading } from '../../components';

import styles from '../../styles/positions.module.scss';

export const useGetPositions = (): Summary | undefined => {
  const { LL } = useI18nContext();
  const { form } = useOrderForm();
  const { getPositionFields } = useGetPositionFields();

  const positions = form.getFieldValue(
    CreateOrderFormFields.POSITIONS,
  ) as Position[];

  if (!positions.length) {
    return;
  }

  return {
    id: uuidv4(),
    hasChildren: true,
    heading: (
      <Heading title={LL.ORDER.NEW_ORDER.SUMMARY.FIELDS.POSITIONS.LABEL()} />
    ),
    children: positions.map((position) => {
      const fields: Summary[] = getPositionFields(position);

      return {
        id: uuidv4(),
        hasChildren: true,
        children: fields,
        classNames: {
          container: styles.container,
        },
      };
    }),
  };
};
