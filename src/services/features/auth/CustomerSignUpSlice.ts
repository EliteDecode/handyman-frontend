import { createAsyncThunkWithHandler } from "@/services/api/apiHandler";
import { createSlice } from "@reduxjs/toolkit";
import customerSignUpService from "./CustomerSignUpService";

const initialState: InitialSupportStateProps = {
  isLoading: false,
  message: "",
  isSuccess: false,
  isError: false,
};

export const customerSignUp = createAsyncThunkWithHandler(
  "auth/signUp",
  async (data: CustomerSignUp, _) => {
    return await customerSignUpService.sign_up(data);
  }
);

const customerSignUpSlice = createSlice({
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
      });
  },
});

export const { reset } = customerSignUpSlice.actions;
export default customerSignUpSlice.reducer;
