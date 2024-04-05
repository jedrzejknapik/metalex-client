export enum SignInFormFields {
  USERNAME = 'username',
  PASSWORD = 'password',
}

export interface SignInPayload {
  [SignInFormFields.USERNAME]: string;
  [SignInFormFields.PASSWORD]: string;
}
