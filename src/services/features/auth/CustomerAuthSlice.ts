import { createAsyncThunkWithHandler } from "@/services/api/apiHandler";
import { createSlice } from "@reduxjs/toolkit";
import CustomerAuthService from "./CustomerAuthService";

const token = localStorage.getItem("HM_access_token");

const initialState: InitialAuthStateProps = {
  isLoading: false,
  message: "",
  isSuccess: false,
  isError: false,
  token: token ? token : null,
};

export const customerSignUp = createAsyncThunkWithHandler(
  "auth/signUp",
  async (data: CustomerSignUp, _) => {
    return await CustomerAuthService.sign_up(data);
  }
);

export const verifyEmail = createAsyncThunkWithHandler(
  "auth/verifyEmail",
  async (data: VerifyEmailProp, _) => {
    return await CustomerAuthService.verify_email(data);
  }
);

export const login = createAsyncThunkWithHandler(
  "auth/login",
  async (data: LoginProp, _) => {
    return await CustomerAuthService.login(data);
  }
);

export const forgetPassword = createAsyncThunkWithHandler(
  "auth/forgetPassword",
  async (data: ForgetPasswordProp, _) => {
    return await CustomerAuthService.forget_password(data);
  }
);

export const resetPassword = createAsyncThunkWithHandler(
  "auth/ResetPassword",
  async (data: ResetPasswordProp, _) => {
    return await CustomerAuthService.reset_password(data);
  }
);

export const LoginWithGoogle = createAsyncThunkWithHandler(
  "auth/login-google",
  async (code: { code: string }, _) => {
    return await CustomerAuthService.login_user_google(code);
  }
);

export const LoginWithFacebook = createAsyncThunkWithHandler(
  "auth/login-facebook",
  async (code: { code: string }) => {
    return await CustomerAuthService.login_user_facebook(code);
  }
);

const customerAuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(customerSignUp.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(customerSignUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(customerSignUp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })

      //verifyEmail case
      .addCase(verifyEmail.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })

      //verifyEmail case
      .addCase(login.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.token = action.payload.data.accessToken;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })

      //forgetPassword case
      .addCase(forgetPassword.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(forgetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(forgetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })

      //resetPassword case
      .addCase(resetPassword.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })

      //LoginWithGoogle case
      .addCase(LoginWithGoogle.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(LoginWithGoogle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(LoginWithGoogle.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })

      //LoginWithFacebook case
      .addCase(LoginWithFacebook.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(LoginWithFacebook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(LoginWithFacebook.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      });
  },
});

export const { reset } = customerAuthSlice.actions;
export default customerAuthSlice.reducer;
