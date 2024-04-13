import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';

import { FormItem, FormNumber } from '@forms';

import { Rule } from 'antd/es/form';

import { SheetFormFields } from '@types';

import styles from './quantity-input.module.scss';

import { useSingleSheet } from '../../../../providers';

export const QuantityInput: FC = () => {
  const { LL } = useI18nContext();
  const { fieldName } = useSingleSheet();

  const rules: Rule[] = [
    {
      required: true,
      message:
        LL.ORDER.NEW_ORDER.FILL_THE_FORM.FIELDS.POSITIONS.FIELDS.SHEETS.FIELDS.QUANTITY.VALIDATION.REQUIRED(),
    },
  ];

  return (
    <FormItem
      label={LL.ORDER.NEW_ORDER.FILL_THE_FORM.FIELDS.POSITIONS.FIELDS.SHEETS.FIELDS.QUANTITY.LABEL()}
      name={[fieldName, SheetFormFields.QUANTITY]}
      required
      hasFeedback
      validateTrigger={['onBlur', 'onChange']}
      rules={rules}
    >
      <FormNumber
        className={styles.input}
        addonAfter={LL.ORDER.NEW_ORDER.FILL_THE_FORM.FIELDS.POSITIONS.FIELDS.SHEETS.FIELDS.QUANTITY.ADDON_AFTER_MESSAGE()}
      />
    </FormItem>
  );
};
