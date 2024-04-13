import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';
import { Switch } from 'antd';

import { FormItem } from '@forms';

import { PositionFormFields } from '@types';

import { useSinglePosition } from '../../../../providers';

export const DoubleSidedSwitch: FC = () => {
  const { LL } = useI18nContext();
  const { fieldName } = useSinglePosition();

  return (
    <FormItem
      label={LL.ORDER.NEW_ORDER.FILL_THE_FORM.FIELDS.POSITIONS.FIELDS.DOUBLE_SIDED.LABEL()}
      name={[fieldName, PositionFormFields.IS_DOUBLE_SIDED]}
    >
      <Switch />
    </FormItem>
  );
};
