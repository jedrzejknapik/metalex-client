import { useState } from 'react';

import { StepProps } from 'antd';

import SvgClipboard from '@icons/clipboard';

import SvgSummary from '@icons/summary';
import SvgSelect from '@icons/select';

import {
  ChooseCategoryTitle,
  OrderFormTitle,
  SummaryTitle,
} from '../components';

import {
  ChooseCategory,
  FormFields,
  Summary,
} from '../../../components/content-form/components';

export const useStepperState = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const steps = [
    {
      title: <ChooseCategoryTitle />,
      icon: <SvgSelect />,
      content: <ChooseCategory />,
    },
    {
      title: <OrderFormTitle />,
      icon: <SvgClipboard />,
      content: <FormFields />,
    },
    {
      title: <SummaryTitle />,
      icon: <SvgSummary />,
      content: <Summary />,
    },
  ];

  const onClickNext = () => {
    setCurrentStep((prevState) => {
      const nextStep = prevState + 1;

      return nextStep > steps.length - 1 ? prevState : nextStep;
    });
  };

  const onClickPrev = () => {
    setCurrentStep((prevState) => {
      const nextStep = prevState - 1;

      return nextStep < 0 ? prevState : nextStep;
    });
  };

  const stepItems: StepProps[] = steps.map(({ title, icon }) => ({
    key: title,
    icon,
    title,
  }));

  const currentContent = steps[currentStep].content;

  return {
    currentStep,
    currentContent,
    onClickNext,
    onClickPrev,
    stepItems,
  };
};
