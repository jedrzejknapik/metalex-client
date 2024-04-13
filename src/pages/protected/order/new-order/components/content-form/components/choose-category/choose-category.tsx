import { FC } from 'react';
import { Radio } from 'antd';

import { CreateOrderFormFields, Profile } from '@types';

import { useOrderForm } from '@pages/protected/order/new-order/providers';

import { ListAnimation } from '@animations/list-animation/list-animation';
import { ListItemAnimation } from '@animations/list-item-animation/list-item-animation';

import { FormItem } from '@forms';

import { NextButton, ProfileOption } from './components';

import { FormActions } from '../form-actions/form-actions';

import styles from './choose-category.module.scss';

export const ChooseCategory: FC = () => {
  const { profiles } = useOrderForm();

  return (
    <>
      <FormItem
        name={CreateOrderFormFields.PROFILE_ID}
        required
        validateTrigger={['onBlur', 'onChange']}
      >
        <Radio.Group optionType="button">
          <ListAnimation className={styles.content}>
            {profiles.map((profile: Profile, index) => (
              <ListItemAnimation index={index} key={profile.id}>
                <ProfileOption {...profile} />
              </ListItemAnimation>
            ))}
          </ListAnimation>
        </Radio.Group>
      </FormItem>
      <FormActions>
        <NextButton />
      </FormActions>
    </>
  );
};
