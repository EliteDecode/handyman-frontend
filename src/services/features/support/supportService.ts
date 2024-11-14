import axiosClient from "@/services/api/axiosClient";
import { IMessage } from "@/types/majorTypes";

const send_message = async (data: IMessage) => {
  const response = await axiosClient.post(`/support/send-message`, data);

  return response.data;
};

const authService = {
  send_message,
};

export default authService;
