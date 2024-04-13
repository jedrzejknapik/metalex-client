import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';

import { FormItem, FormNumber } from '@forms';

import { Rule } from 'antd/es/form';

import { PositionFormFields } from '@types';

import { useSinglePosition } from '../../../../providers';

import styles from './width-input.module.scss';

export const WidthInput: FC = () => {
  const { LL } = useI18nContext();
  const { fieldName } = useSinglePosition();

  const rules: Rule[] = [
    {
      required: true,
      message:
        LL.ORDER.NEW_ORDER.FILL_THE_FORM.FIELDS.POSITIONS.FIELDS.WIDTH.VALIDATION.REQUIRED(),
    },
  ];

  return (
    <FormItem
      label={LL.ORDER.NEW_ORDER.FILL_THE_FORM.FIELDS.POSITIONS.FIELDS.WIDTH.LABEL()}
      name={[fieldName, PositionFormFields.WIDTH]}
      required
      hasFeedback
      validateTrigger={['onBlur', 'onChange']}
      rules={rules}
    >
      <FormNumber className={styles.input} addonAfter="mm" />
    </FormItem>
  );
};
