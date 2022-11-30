import { FormEvent, useState, MouseEvent } from "react";

export function useForm(steps: JSX.Element[]) {
  const [currentStep, setCurrentStep] = useState(0);

  function changeStep(
    e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>,
    i: number
  ) {
    e?.preventDefault();

    if (i < 0 || i >= steps.length) return;

    setCurrentStep(i);
  }

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isLastStep: currentStep + 1 === steps.length ? true : false,
    isFirstStep: currentStep === 0 ? true : false,
  };
}
