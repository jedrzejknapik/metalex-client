import { FC } from 'react';

import { Actions, SummaryList } from './components';

import { FormActions } from '../form-actions/form-actions';

export const Summary: FC = () => {
  return (
    <div>
      <SummaryList />
      <FormActions>
        <Actions />
      </FormActions>
    </div>
  );
};
