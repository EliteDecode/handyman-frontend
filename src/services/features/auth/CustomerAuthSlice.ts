import { createAsyncThunkWithHandler } from "@/services/api/apiHandler";
import { createSlice } from "@reduxjs/toolkit";
import customerSignUpService from "./CustomerAuthService";

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
    return await customerSignUpService.sign_up(data);
  }
);

export const verifyEmail = createAsyncThunkWithHandler(
  "auth/verifyEmail",
  async (data: VerifyEmailProp, _) => {
    return await customerSignUpService.verify_email(data);
  }
);

export const login = createAsyncThunkWithHandler(
  "auth/login",
  async (data: LoginProp, _) => {
    return await customerSignUpService.login(data);
  }
);

export const forgetPassword = createAsyncThunkWithHandler(
  "auth/forgetPassword",
  async (data: ForgetPasswordProp, _) => {
    return await customerSignUpService.forget_password(data);
  }
);

export const resetPassword = createAsyncThunkWithHandler(
  "auth/ResetPassword",
  async (data: ResetPasswordProp, _) => {
    return await customerSignUpService.reset_password(data);
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
  },
});

export const { reset } = customerAuthSlice.actions;
export default customerAuthSlice.reducer;
