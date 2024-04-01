import { FC, PropsWithChildren, useCallback, useEffect, useState } from "react";
import { handleUserAuthorizationOnInit, signIn, signOut } from "./auth.utils";
import { AuthContext } from "./auth-context";
import { TOKEN_STORAGE_KEY } from "./auth.consts";
import { LoginPayload } from "@types";

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [authorizationInitializing, setAuthorizationInitializing] =
    useState(true);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const handleUserAuthorization = async () => {
      try {
        const response = await handleUserAuthorizationOnInit();
        //TODO: handle authorization
        setIsUserLoggedIn(!!response);
        console.log(response);
        // eslint-disable-next-line no-empty
      } catch (error) {
      } finally {
        setAuthorizationInitializing(false);
      }
    };

    handleUserAuthorization();
  }, []);

  const logIn = useCallback(async (payload: LoginPayload) => {
    try {
      const credentional = await signIn(payload);
      localStorage.setItem(TOKEN_STORAGE_KEY, credentional);
      setIsUserLoggedIn(!!credentional);
      return {
        success: !!credentional,
        credentional,
      };
    } catch (error) {
      setIsUserLoggedIn(false);
      return {
        success: false,
        error,
      };
    }
  }, []);

  const logOut = useCallback(() => {
    signOut();
    setIsUserLoggedIn(false);
  }, []);

  const value = {
    authorizationInitializing,
    isUserLoggedIn,
    logIn,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
