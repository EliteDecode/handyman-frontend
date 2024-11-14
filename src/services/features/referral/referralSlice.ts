import { createAsyncThunkWithHandler } from "@/services/api/apiHandler";
import referralService from "./referralService";
import { createSlice } from "@reduxjs/toolkit";
import { initialReferralStateProps, IReferral } from "@/types/referral.types";

const referral = localStorage.getItem("BST_referrals");

const initialState: initialReferralStateProps = {
  referrals: referral ? JSON.parse(referral) : null,
  singleReferral: null,
  isLoading: false,
  message: "",
  isSuccess: false,
  isError: false,
};

export const Addreferral = createAsyncThunkWithHandler(
  "referral/Addreferral",
  async (data: IReferral) => {
    return await referralService.add_referrals(data);
  }
);

export const FetchReferralDetails = createAsyncThunkWithHandler(
  "referral/fetchReferralDetails",
  async () => {
    return await referralService.fetch_referral_details();
  }
);

export const FetchSingleReferralDetails = createAsyncThunkWithHandler(
  "referral/FetchSingleReferralDetails",
  async (referralId: string) => {
    return await referralService.fetch_single_referral_details(referralId);
  }
);

export const UpdateReferralDetails = createAsyncThunkWithHandler(
  "referral/updateReferralDetails",
  async (data: IReferral, _) => {
    return await referralService.update_referral_details(data);
  }
);

export const deleteReferralAccount = createAsyncThunkWithHandler(
  "referral/deleteReferralAccount",
  async (referralId: string, _) => {
    return await referralService.delete_referral_details(referralId);
  }
);

const referralSlice = createSlice({
  name: "referral",
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
      .addCase(FetchReferralDetails.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(FetchReferralDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.referrals = action.payload.data;
      })
      .addCase(FetchReferralDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })
      .addCase(UpdateReferralDetails.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(UpdateReferralDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.singleReferral = action.payload.data;
      })
      .addCase(UpdateReferralDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })
      .addCase(deleteReferralAccount.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(deleteReferralAccount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.singleReferral = null;
      })
      .addCase(deleteReferralAccount.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })
      .addCase(FetchSingleReferralDetails.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(FetchSingleReferralDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleReferral = action.payload.data;
      })
      .addCase(FetchSingleReferralDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })
      .addCase(Addreferral.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(Addreferral.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(Addreferral.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      });
  },
});

export const { reset } = referralSlice.actions;
export default referralSlice.reducer;
