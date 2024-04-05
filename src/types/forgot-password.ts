export enum ForgotPasswordFormFields {
  USERNAME = 'username',
}

export interface ForgotPasswordPayload {
  [ForgotPasswordFormFields.USERNAME]: string;
}
