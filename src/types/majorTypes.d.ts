declare interface InitialSupportStateProps {
  isLoading: boolean;
  message: string;
  isSuccess: boolean;
  isError: boolean;
}

declare interface InitialAuthStateProps {
  isLoading: boolean;
  isLogoutLoading: boolean;
  message: string;
  isSuccess: boolean;
  isError: boolean;
  token: string | null;
}

declare interface InitialUserStateProps {
  isLoading: boolean;
  message: string;
  isSuccess: boolean;
  isError: boolean;
  user: IUser[] | null;
}

declare interface IUser {
  _id: string;
  firstname: string | null;
  lastname: string | null;
  gender: string | null;
  state: string | null;
  lga: string | null;
  email: string;
  phone: string | null;
  address: sring | null;
  isEmailVerified: boolean;
  isProfileUpdated: boolean;
  isSuspended: boolean;
  referralCode: string;
  createdAt: string;
  updatedAt: string;
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

declare interface CompleteProfileProp {
  address: string;
  state: string;
  lga: string;
  firstname: string;
  lastname: string;
  phone: string;
  gender: string;
}
