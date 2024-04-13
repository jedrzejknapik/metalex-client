import { Form } from 'antd';
import { FC } from 'react';

import { CreateOrderFormFields } from '@types';

import { SinglePositionProvider } from './providers';
import { Heading, SinglePosition } from './components';

import { INITIAL_POSITION_VALUES } from './position.consts';

import styles from './positions.module.scss';

export const Positions: FC = () => {
  return (
    <Form.List name={CreateOrderFormFields.POSITIONS}>
      {(fields, { add, remove }) => (
        <div className={styles.container}>
          <Heading onClickAdd={() => add(INITIAL_POSITION_VALUES)} />
          <div>
            {fields.map(({ name, key }) => (
              <SinglePositionProvider
                key={key}
                fieldName={name}
                onClickRemove={() => remove(name)}
              >
                <SinglePosition />
              </SinglePositionProvider>
            ))}
          </div>
        </div>
      )}
    </Form.List>
  );
};
