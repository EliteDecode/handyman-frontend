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

const customerSignUpService = {
  sign_up,
};

export default customerSignUpService;
