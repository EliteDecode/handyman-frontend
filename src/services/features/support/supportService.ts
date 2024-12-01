import axiosClient from "@/services/api/axiosClient";
// import axios from "axios";

const send_message = async (data: IMessage) => {
  const response = await axiosClient.post(
    "https://handyman-backend-4sb0.onrender.com/handyman/v1/support/send-message",
    data
  );

  return response.data;
};

const authService = {
  send_message,
};

export default authService;
