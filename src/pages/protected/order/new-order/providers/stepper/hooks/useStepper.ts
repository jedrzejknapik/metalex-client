import { useContext } from 'react';

import { StepperContext } from '../stepper-context';

export const useStepper = () => {
  const stepper = useContext(StepperContext);

  if (!stepper) {
    throw new Error('useStepper must be used within StepperContext');
  }

  return stepper;
};
