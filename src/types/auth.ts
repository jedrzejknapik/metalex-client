export enum LoginFormFields {
  USERNAME = 'username',
  PASSWORD = 'password',
}

export interface LoginPayload {
  [LoginFormFields.USERNAME]: string;
  [LoginFormFields.PASSWORD]: string;
}
