import { createAsyncThunkWithHandler } from "@/services/api/apiHandler";
import { createSlice } from "@reduxjs/toolkit";
import userService from "./userService";

const user = localStorage.getItem("HM_user_info");
const serviceCategories = localStorage.getItem("HM_service_categories");
const handymenLists = localStorage.getItem("HM_handymen_lists");
const handymanProfile = localStorage.getItem("HM_handyman_profile");

const initialState: InitialUserStateProps = {
  isLoading: false,
  message: "",
  isSuccess: false,
  isError: false,
  isProfileLoading: false,
  user: user ? JSON.parse(user) : null,
  serviceCategories: serviceCategories ? JSON.parse(serviceCategories) : null,
  handymenLists: null,
  handymenListsByService: handymenLists ? JSON.parse(handymenLists) : null,
  handymanProfile: handymanProfile ? JSON.parse(handymanProfile) : null,
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

export const getServiceCategories = createAsyncThunkWithHandler(
  "user/getServiceCategories",
  async () => {
    return await userService.get_service_categories();
  }
);

export const getAllHandymen = createAsyncThunkWithHandler(
  "user/getAllHandymen",
  async () => {
    return await userService.get_all_handymen();
  }
);

export const getHandymenByService = createAsyncThunkWithHandler(
  "user/getHandymenByService",
  async (serviceId: string, _) => {
    return await userService.get_handymen_by_service(serviceId);
  }
);

export const getHandymanProfile = createAsyncThunkWithHandler(
  "user/gethandymanprofile",
  async (handymanId: string, _) => {
    return await userService.get_Handyman_Profile(handymanId);
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
      state.isProfileLoading = false;
      state.message = "";
    },
    resetUser: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.isProfileLoading = false;
      state.message = "";
      state.user = null;
      state.serviceCategories = null;
      state.handymenListsByService = null;
      state.handymenLists = null;
      state.handymanProfile = null;
    },
    resetListByService: (state) => {
      state.handymenListsByService = null;
    },
    resetHMProfile: (state) => {
      state.handymanProfile = null;
      localStorage.removeItem("HM_handyman_profile");
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
        state.user = action.payload.data;
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
      })

      .addCase(getServiceCategories.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getServiceCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.serviceCategories = action.payload.data;
      })
      .addCase(getServiceCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })

      .addCase(getAllHandymen.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getAllHandymen.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.handymenLists = action.payload.data;
      })
      .addCase(getAllHandymen.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })

      .addCase(getHandymenByService.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getHandymenByService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.handymenListsByService = action.payload.data;
      })
      .addCase(getHandymenByService.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })

      .addCase(getHandymanProfile.pending, (state, _) => {
        state.isProfileLoading = true;
      })
      .addCase(getHandymanProfile.fulfilled, (state, action) => {
        state.isProfileLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.handymanProfile = action.payload.data;
      })
      .addCase(getHandymanProfile.rejected, (state, action) => {
        state.isProfileLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      });
  },
});

export const { reset, resetUser, resetHMProfile, resetListByService } =
  userSlice.actions;
export default userSlice.reducer;
