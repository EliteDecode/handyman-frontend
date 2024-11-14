import axiosClient from "@/services/api/axiosClient";
import { IChangePassword, IUser } from "@/types/user.types";

const fetch_user_details = async () => {
  const response = await axiosClient.get(`/user`);

  if (response.data.success === true) {
    localStorage.setItem(
      "BST_user_details",
      JSON.stringify(response.data.data)
    );
  }
  return response.data;
};

const update_user_email = async (data: { email: string }, userId: string) => {
  const response = await axiosClient.post(`/user/update-email/${userId}`, data);
  return response.data;
};

const verify_user_email = async (
  data: { authCode: number },
  userId: string
) => {
  const response = await axiosClient.put(`/user/verify-email/${userId}`, {
    authCode: data.authCode,
  });

  return response.data;
};

const update_user_details = async (userData: IUser, userId: string) => {
  const response = await axiosClient.put(`/user/${userId}`, userData);

  if (response.data.success === true) {
    localStorage.setItem(
      "BST_user_details",
      JSON.stringify(response.data.data)
    );
  }
  return response.data;
};

const update_user_password = async (
  userData: IChangePassword,
  userId: string
) => {
  const response = await axiosClient.put(
    `/user/change-password/${userId}`,
    userData
  );

  return response.data;
};

const delete_user_account = async (userId: string) => {
  const response = await axiosClient.delete(`/user/delete-account/${userId}`);

  if (response.data.success === true) {
    localStorage.removeItem("BST_access_Token");
    localStorage.removeItem("BST_refresh_Token");
    localStorage.removeItem("BST_user_details");
  }
  return response.data;
};

const authService = {
  fetch_user_details,
  update_user_details,
  update_user_password,
  delete_user_account,
  update_user_email,
  verify_user_email,
};

export default authService;
