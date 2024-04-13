import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';

import { Radio } from 'antd';
import { Rule } from 'antd/es/form';

import { useOrderForm } from '@pages/protected/order/new-order/providers';

import { FormItem } from '@forms';

import { PositionFormFields, Thickness } from '@types';

import { ThicknessOption } from './components';

import { useSinglePosition } from '../../../../providers';

import styles from './thickness-select.module.scss';

export const ThicknessSelect: FC = () => {
  const { LL } = useI18nContext();
  const { thickness } = useOrderForm();
  const { fieldName } = useSinglePosition();

  const rules: Rule[] = [
    {
      required: true,
      message:
        LL.ORDER.NEW_ORDER.FILL_THE_FORM.FIELDS.POSITIONS.FIELDS.THICKNESS.VALIDATION.REQUIRED(),
    },
  ];

  return (
    <FormItem
      label={LL.ORDER.NEW_ORDER.FILL_THE_FORM.FIELDS.POSITIONS.FIELDS.THICKNESS.LABEL()}
      name={[fieldName, PositionFormFields.THICKNESS_ID]}
      required
      hasFeedback
      validateTrigger={['onBlur', 'onChange']}
      rules={rules}
    >
      <Radio.Group optionType="button" className={styles.content}>
        {thickness.map((thicknessProps: Thickness) => (
          <ThicknessOption {...thicknessProps} key={thicknessProps.id} />
        ))}
      </Radio.Group>
    </FormItem>
  );
};
