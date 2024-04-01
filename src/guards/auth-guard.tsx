import { FC, PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/auth/useAuth";

export const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
  const { authorizationInitializing, isUserLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authorizationInitializing && !isUserLoggedIn) {
      navigate("/login");
    }
  }, [authorizationInitializing, isUserLoggedIn, navigate]);

  if (isUserLoggedIn) {
    return <>{children}</>;
  }

  // TODO: Add global loader
  return <p>Loading...</p>;
};
