declare interface InitialSupportStateProps {
  isLoading: boolean;
  message: string;
  isSuccess: boolean;
  isError: boolean;
  token: string | null;
}

declare interface IMessage {
  fullname: string;
  email: string;
  phone: string;
  title: string;
  message: string;
}

declare interface CustomerSignUp {
  email: string;
  password: string;
  confirmPassword: string;
}

declare interface UserDataId {
  data: {
    _id: string;
    email: string;
  };
  message: string;
  success: boolean;
}

declare interface VerifyEmailProp {
  authCode: string;
}

declare interface LoginProp {
  email: string;
  password: sring;
}

declare interface ForgetPasswordProp {
  email: string;
}

declare interface ResetPasswordProp {
  password: string;
  confirmPassword: string;
  token: string | null;
}
