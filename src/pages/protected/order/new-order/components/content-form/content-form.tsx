import { FC } from 'react';
import { Form } from 'antd';

import { useOrderForm, useStepper } from '../../providers';

import { INITIAL_CONTENT_FORM_VALUES } from './content-form.consts';

import styles from './content-form.module.scss';

export const ContentForm: FC = () => {
  const { form } = useOrderForm();
  const { currentContent } = useStepper();

  return (
    <div className={styles.container}>
      <Form
        form={form}
        layout="vertical"
        labelAlign="left"
        initialValues={INITIAL_CONTENT_FORM_VALUES}
      >
        {currentContent}
      </Form>
    </div>
  );
};
