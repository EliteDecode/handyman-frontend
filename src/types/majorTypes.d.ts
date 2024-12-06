declare interface InitialSupportStateProps {
  isLoading: boolean;
  message: string;
  isSuccess: boolean;
  isError: boolean;
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
  code: string;
}
