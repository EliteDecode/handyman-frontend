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

const get_service_categories = async () => {
  const response = await axiosClient.get(`/service-category/fetch`);

  if (response.data.success === true) {
    localStorage.setItem(
      "HM_service_categories",
      JSON.stringify(response.data.data)
    );
  }

  return response.data;
};

const get_all_handymen = async () => {
  const response = await axiosClient.get(`/handyman/handymen/fetch-all`);
  
  return response.data;
};

const get_handymen_by_service = async (serviceId: string) => {
  const response = await axiosClient.get(
    `/handyman/handymen/fetch-all/${serviceId}`
  );
  
    if (response.data.success === true) {
      localStorage.setItem(
        "HM_handymen_lists",
        JSON.stringify(response.data.data)
      );
    }

  return response.data;
};

const get_Handyman_Profile = async (handymanId: string) => {
  const response = await axiosClient.get(
    `/handyman/handymen/fetch-complete-profile/${handymanId}`
  );

  if (response.data.success === true) {
    localStorage.setItem(
      "HM_handyman_profile",
      JSON.stringify(response.data.data)
    );
  }

  return response.data;
};
const userService = {
  update_profile,
  fetch_user_info,
  get_service_categories,
  get_handymen_by_service,
  get_all_handymen,
  get_Handyman_Profile,
};

export default userService;
