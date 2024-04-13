import { FC } from 'react';
import { Steps } from 'antd';

import { useStepper } from '../../providers';

export const Stepper: FC = () => {
  const { currentStep, stepItems } = useStepper();

  return (
    <Steps current={currentStep} items={stepItems} labelPlacement="vertical" />
  );
};
