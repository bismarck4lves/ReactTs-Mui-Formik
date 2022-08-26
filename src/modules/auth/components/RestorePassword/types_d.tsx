export interface FormActionProps {
  onSubmit: (val: any) => any;
  loading?: boolean;
}

export interface FormRestoreProps {
  email?: string;
  code?: string;
  password?: string;
  password_confirmation?: string;
}

export enum StepChoices {
  email = "email",
  code = "code",
  newPassword = "newPassword",
}

export type Steps = keyof typeof StepChoices

export interface StepMap {
  email: any;
  code: any;
  newPassword: any;
}
