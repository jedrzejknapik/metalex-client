import { createContext } from 'react';

import { StepProps } from 'antd';

export interface StepperContextProps {
  currentStep: number;
  currentContent: JSX.Element;
  stepItems: StepProps[];
  onClickNext: () => void;
  onClickPrev: () => void;
}

export const StepperContext = createContext<StepperContextProps | undefined>(
  undefined,
);
