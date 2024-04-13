import { useEffect, useState } from 'react';
import { useI18nContext } from '@i18n/i18n-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { SignInPayload, UserSession } from '@types';

import { onAuthorization, onSignIn } from '@api/auth';

import { useToken } from '@hooks/useToken';

import { NON_PROTECTED_ROUTES, PROTECTED_ROUTES } from '@routes';

export const useHandleAuthorization = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [userSession, setUserSession] = useState<UserSession | null>(null);
  const [isSignInFormSubmitted, setIsSignInFormSubmitted] = useState(false);
  const { setToken, removeToken, token } = useToken();
  const { LL } = useI18nContext();
  const navigate = useNavigate();

  useEffect(() => {
    const getSession = async () => {
      try {
        const session = await onAuthorization();

        setUserSession(session);
        setIsAuthenticated(true);
      } catch (e) {
        setIsAuthenticated(false);
      }
    };

    getSession();
  }, [token]);

  const onSingInUser = async (payload: SignInPayload) => {
    try {
      setIsSignInFormSubmitted(true);
      const token = await onSignIn(payload);
      setToken(token);
      toast.success(LL.SIGN_IN.FORM.RESPONSE.SUCCESS());
      setIsAuthenticated(true);

      navigate(PROTECTED_ROUTES.DASHBOARD());
      setIsSignInFormSubmitted(false);
    } catch (e) {
      toast.error(LL.SIGN_IN.FORM.RESPONSE.FAILED());
      setIsAuthenticated(false);
      setIsSignInFormSubmitted(false);
    }
  };

  const onSignOutUser = async () => {
    try {
      removeToken();
      // Request do wylogowania sesji
      toast.success(LL.SIGN_OFF.RESPONSE.SUCCESS());
      setIsAuthenticated(false);

      navigate(NON_PROTECTED_ROUTES.SIGN_IN());
    } catch (e) {
      toast.error(LL.SIGN_OFF.RESPONSE.FAILED());
    }
  };

  return {
    userSession,
    isAuthenticated,
    onSingInUser,
    onSignOutUser,
    isSignInFormSubmitted,
  };
};
