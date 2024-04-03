import { useNavigate } from 'react-router-dom';

import { useAuth } from '@providers/auth/useAuth';

import { LoginPayload } from '@types';

export const useLogin = () => {
  const navigate = useNavigate();
  const { logIn } = useAuth();

  const handleSubmit = async (values: LoginPayload) => {
    const response = await logIn(values);

    if (response.error) {
      console.log(response.error);
    } else {
      console.log(response);
      navigate('/');
    }
  };

  return {
    handleSubmit,
  };
};
