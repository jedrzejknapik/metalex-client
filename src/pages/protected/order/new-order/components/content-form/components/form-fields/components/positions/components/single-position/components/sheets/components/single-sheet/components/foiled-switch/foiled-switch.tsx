import { FC } from 'react';
import { useI18nContext } from '@i18n/i18n-react';
import { Switch } from 'antd';

import { FormItem } from '@forms';

import { SheetFormFields } from '@types';

import { useSingleSheet } from '../../../../providers';

export const FoiledSwitch: FC = () => {
  const { LL } = useI18nContext();
  const { fieldName } = useSingleSheet();

  return (
    <FormItem
      label={LL.ORDER.NEW_ORDER.FILL_THE_FORM.FIELDS.POSITIONS.FIELDS.SHEETS.FIELDS.IS_FOILED.LABEL()}
      name={[fieldName, SheetFormFields.IS_FOILED]}
    >
      <Switch />
    </FormItem>
  );
};
