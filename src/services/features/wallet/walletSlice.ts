import { createAsyncThunkWithHandler } from "@/services/api/apiHandler";
import { initialWalletStateProps } from "@/types/wallet.types";
import { createSlice } from "@reduxjs/toolkit";
import walletService from "./walletService";

const wallets = localStorage.getItem("BST_user_wallet");
const withdrawals = localStorage.getItem("BST_user_withdrawals");

const initialState: initialWalletStateProps = {
  wallets: wallets ? JSON.parse(wallets) : null,
  withdrawals: withdrawals ? JSON.parse(withdrawals) : null,
  isLoading: false,
  message: "",
  isSuccess: false,
  isError: false,
};

export const FetchUserWallet = createAsyncThunkWithHandler(
  "wallet/FetchUserWallet",
  async () => {
    return await walletService.fetch_user_wallet();
  }
);

export const FetchUserWithdrawals = createAsyncThunkWithHandler(
  "wallet/FetchUserWithdrawals",
  async () => {
    return await walletService.fetch_user_withdrawals();
  }
);

export const RequestWithdrawal = createAsyncThunkWithHandler(
  "wallet/RequestWithdrawal",
  async (amount: number) => {
    return await walletService.request_withdrawal(amount);
  }
);

const walletSlice = createSlice({
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
      .addCase(FetchUserWallet.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(FetchUserWallet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.wallets = action.payload.data;
      })
      .addCase(FetchUserWallet.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })
      .addCase(FetchUserWithdrawals.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(FetchUserWithdrawals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.withdrawals = action.payload.data;
      })
      .addCase(FetchUserWithdrawals.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })
      .addCase(RequestWithdrawal.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(RequestWithdrawal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(RequestWithdrawal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      });
  },
});

export const { reset } = walletSlice.actions;
export default walletSlice.reducer;
