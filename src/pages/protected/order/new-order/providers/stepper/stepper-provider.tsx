import { FC, PropsWithChildren } from 'react';

import { StepperContext, StepperContextProps } from './stepper-context';

import { useStepperState } from './hooks';

export const StepperProvider: FC<PropsWithChildren> = ({ children }) => {
  const { currentStep, onClickNext, onClickPrev, stepItems, currentContent } =
    useStepperState();

  const value: StepperContextProps = {
    currentStep,
    currentContent,
    onClickNext,
    onClickPrev,
    stepItems,
  };

  return (
    <StepperContext.Provider value={value}>{children}</StepperContext.Provider>
  );
};
