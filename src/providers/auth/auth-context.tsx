import { createContext } from "react";
import { LoginPayload } from "@types";

interface AuthContextProps {
  authorizationInitializing: boolean;
  isUserLoggedIn: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logIn: (value: LoginPayload) => Promise<any>;
  logOut: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);
