import axiosClient from "@/services/api/axiosClient";

const fetch_user_info = async () => {
  const response = await axiosClient.get(`/user`);

  if (response.data.success === true) {
    localStorage.setItem("HM_user_info", JSON.stringify(response.data.data));
  }

  return response.data;
};

const update_profile = async (
  userData: CompleteProfileProp,
  userId: string
) => {
  const response = await axiosClient.put(`/user/${userId}`, userData);
  
  if (response.data.success === true) {
    localStorage.setItem("HM_user_info", JSON.stringify(response.data.data));
  }
  
  return response.data;
};

const userService = { update_profile, fetch_user_info };

export default userService;
