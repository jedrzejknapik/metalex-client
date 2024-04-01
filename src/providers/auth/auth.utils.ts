import { api } from "@services";
import { LoginPayload } from "@types";
import {
  CURRENT_USER_ROUTE,
  SIGN_IN_ROUTE,
  TOKEN_STORAGE_KEY,
} from "./auth.consts";

export const signIn = (payload: LoginPayload) =>
  api.post(SIGN_IN_ROUTE, payload);

export const signOut = () => localStorage.clear();

export const getToken = () => localStorage.getItem(TOKEN_STORAGE_KEY);

export const handleUserAuthorizationOnInit = () => {
  return api.get(CURRENT_USER_ROUTE);
};
