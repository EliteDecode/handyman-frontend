import { createAsyncThunkWithHandler } from "@/services/api/apiHandler";
import {
  IChangePassword,
  initialUserStateProps,
  IUser,
} from "@/types/user.types";
import { createSlice } from "@reduxjs/toolkit";
import userService from "./userService";

const user = localStorage.getItem("BST_user_details");

const initialState: initialUserStateProps = {
  user: user ? JSON.parse(user) : null,
  isLoading: false,
  message: "",
  isSuccess: false,
  isError: false,
};

export const FetchUserDetails = createAsyncThunkWithHandler(
  "user/fetchUserDetails",
  async () => {
    return await userService.fetch_user_details();
  }
);

export const UpdateUserDetails = createAsyncThunkWithHandler(
  "user/updateUserDetails",
  async (data: IUser, thunkAPi) => {
    const userId = thunkAPi.getState().user.user._id;
    return await userService.update_user_details(data, userId);
  }
);

export const deleteUserAccount = createAsyncThunkWithHandler(
  "user/deleteUserAccount",
  async (userId: string, _) => {
    return await userService.delete_user_account(userId);
  }
);

export const updateUserPassword = createAsyncThunkWithHandler(
  "user/updateUserPassword",
  async (data: IChangePassword, thunkAPi) => {
    const userId = thunkAPi.getState().user.user._id;
    return await userService.update_user_password(data, userId);
  }
);

export const UpdateUserEmail = createAsyncThunkWithHandler(
  "user/UpdateUserEmail",
  async (data: { email: string }, thunkAPi) => {
    const userId = thunkAPi.getState().user.user._id;
    return await userService.update_user_email(data, userId);
  }
);

export const VerifyUserEmail = createAsyncThunkWithHandler(
  "user/VerifyUserEmail",
  async (data: { authCode: number }, thunkAPi) => {
    const userId = thunkAPi.getState().user.user._id;
    return await userService.verify_user_email(data, userId);
  }
);

const userSlice = createSlice({
  name: "user",
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
      .addCase(FetchUserDetails.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(FetchUserDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload.data;
      })
      .addCase(FetchUserDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })
      .addCase(UpdateUserDetails.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(UpdateUserDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Profile updated successfully";
        state.user = action.payload.data;
      })
      .addCase(UpdateUserDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })
      .addCase(deleteUserAccount.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(deleteUserAccount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.user = null;
      })
      .addCase(deleteUserAccount.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })
      .addCase(updateUserPassword.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(updateUserPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(updateUserPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })
      .addCase(UpdateUserEmail.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(UpdateUserEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(UpdateUserEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })
      .addCase(VerifyUserEmail.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(VerifyUserEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.user = action.payload.data;
      })
      .addCase(VerifyUserEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
