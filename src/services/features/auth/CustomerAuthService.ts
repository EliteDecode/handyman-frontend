import axiosClient from "@/services/api/axiosClient";
// import axios from "axios";

const sign_up = async (data: CustomerSignUp) => {
  const response = await axiosClient.post(`/auth/register`, data);

  localStorage.setItem("userId", response.data.data._id);

  return response.data;
};

const verify_email = async (userData: VerifyEmailProp) => {
  const userId = localStorage.getItem("userId");
  if (userId !== null) {
    const response = await axiosClient.post(`/auth/verify/${userId}`, userData);

    if (response.data.success === true) localStorage.removeItem("userId");

    return response.data;
  }
  return;
};

const login = async (userData: LoginProp) => {
  const response = await axiosClient.post(`/auth/login`, userData);

  if (response.data.success === true) {
    localStorage.setItem("HMan_access_token", response.data.data.accessToken);

    localStorage.setItem("HMan_refresh_token", response.data.data.refreshToken);
  }

  return response.data;
};

const customerSignUpService = {
  sign_up,
  verify_email,
  login,
};

export default customerSignUpService;
