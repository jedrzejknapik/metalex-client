import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';

import { Rule } from 'antd/es/form';

import { FormItem, FormSelect } from '@forms';

import { PositionFormFields } from '@types';

import { useSelectOptions } from './hooks';

import { useSinglePosition } from '../../../../providers';

export const ColorSelect: FC = () => {
  const { LL } = useI18nContext();
  const { options } = useSelectOptions();
  const { fieldName } = useSinglePosition();

  const rules: Rule[] = [
    {
      required: true,
      message:
        LL.ORDER.NEW_ORDER.FILL_THE_FORM.FIELDS.POSITIONS.FIELDS.COLOR.VALIDATION.REQUIRED(),
    },
  ];

  return (
    <FormItem
      label={LL.ORDER.NEW_ORDER.FILL_THE_FORM.FIELDS.POSITIONS.FIELDS.COLOR.LABEL()}
      name={[fieldName, PositionFormFields.COLOR_ID]}
      required
      hasFeedback
      validateTrigger={['onBlur', 'onChange']}
      rules={rules}
    >
      <FormSelect options={options} />
    </FormItem>
  );
};
