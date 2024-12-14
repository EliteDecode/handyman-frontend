import { createAsyncThunkWithHandler } from "@/services/api/apiHandler";
import { createSlice } from "@reduxjs/toolkit";
import userService from "./userService";

const user = localStorage.getItem("HM_user_info");

const initialState: InitialUserStateProps = {
  isLoading: false,
  message: "",
  isSuccess: false,
  isError: false,
  user: user ? JSON.parse(user) : null,
};

export const fetchUserInfo = createAsyncThunkWithHandler(
  "user/fetch-user",
  async () => {
    return await userService.fetch_user_info();
  }
);

export const updateProfile = createAsyncThunkWithHandler(
  "user/complete-profile",
  async (data: CompleteProfileProp, thunkAPi) => {
    const userId = thunkAPi.getState().user.user._id;

    return await userService.update_profile(data, userId);
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

      .addCase(fetchUserInfo.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })

      .addCase(updateProfile.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
