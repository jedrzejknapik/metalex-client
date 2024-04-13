import { FC } from 'react';

import { Actions, GeneralFields, Positions } from './components';

import { FormActions } from '../form-actions/form-actions';

import styles from './form-fields.module.scss';

export const FormFields: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <GeneralFields />
        <Positions />
      </div>
      <FormActions>
        <Actions />
      </FormActions>
    </>
  );
};
