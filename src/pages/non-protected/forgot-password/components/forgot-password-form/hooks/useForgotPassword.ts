import { ForgotPasswordFormFields } from '@types';

export const useForgotPassword = () => {
  const onSubmit = async (payload: ForgotPasswordFormFields) => {
    console.info(payload);
  };

  return {
    onSubmit,
  };
};
