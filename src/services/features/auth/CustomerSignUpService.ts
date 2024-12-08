import axiosClient from "@/services/api/axiosClient";
// import axios from "axios";

const sign_up = async (data: CustomerSignUp) => {
  const response = await axiosClient.post(
    "https://handyman-backend-4sb0.onrender.com/handyman/v1/auth/register",
    data
  );

  localStorage.setItem("userId", JSON.stringify(response.data));

  return response.data;
};

const verify_email = async (userData: VerifyEmailProp) => {
  const localData = localStorage.getItem("userId");
  if (localData !== null) {
    const { data }: UserDataId = JSON.parse(localData);

    const response = await axiosClient.post(
      `https://handyman-backend-4sb0.onrender.com/handyman/v1/auth/verify/${data._id}`,
      userData
    );

    return response.data;
  }
  return;
};

const login = async (userData: LoginProp) => {
  const response = await axiosClient.post(
    "https://handyman-backend-4sb0.onrender.com/handyman/v1/auth/login",
    userData
  );

  return response.data;
};

const customerSignUpService = {
  sign_up,
  verify_email,
  login,
};

export default customerSignUpService;
