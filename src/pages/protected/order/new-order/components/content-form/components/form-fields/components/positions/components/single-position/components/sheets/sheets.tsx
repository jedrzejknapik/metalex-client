import { FC } from 'react';
import { Form } from 'antd';

import { FormItem } from '@forms';

import { PositionFormFields } from '@types';

import { Heading, SingleSheet } from './components';

import { useSinglePosition } from '../../../../providers';

import { SingleSheetProvider } from './providers';

import { INITIAL_SHEETS_VALUES } from './sheets.consts';

import styles from './sheets.module.scss';

export const Sheets: FC = () => {
  const { fieldName } = useSinglePosition();

  return (
    <FormItem>
      <Form.List name={[fieldName, PositionFormFields.SHEETS]}>
        {(fields, { add, remove }) => (
          <div className={styles.container}>
            <Heading onClickAdd={() => add(INITIAL_SHEETS_VALUES)} />
            <div className={styles.sheets}>
              {fields.map(({ name, key }) => (
                <SingleSheetProvider
                  key={key}
                  fieldName={name}
                  onClickRemove={() => remove(name)}
                >
                  <SingleSheet />
                </SingleSheetProvider>
              ))}
            </div>
          </div>
        )}
      </Form.List>
    </FormItem>
  );
};
