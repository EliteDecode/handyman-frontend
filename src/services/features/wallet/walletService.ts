import axiosClient from "@/services/api/axiosClient";

const fetch_user_wallet = async () => {
  const response = await axiosClient.get(`/wallet`);

  if (response.data.success === true) {
    localStorage.setItem("BST_user_wallet", JSON.stringify(response.data.data));
  }
  return response.data;
};

const fetch_user_withdrawals = async () => {
  const response = await axiosClient.get(`/withdrawal`);

  if (response.data.success === true) {
    localStorage.setItem(
      "BST_user_withdrawal",
      JSON.stringify(response.data.data)
    );
  }
  return response.data;
};

const request_withdrawal = async (amount: number) => {
  const response = await axiosClient.post(`/withdrawal/request-withdrawal`, {
    amount,
  });

  return response.data;
};

const authService = {
  fetch_user_wallet,
  fetch_user_withdrawals,
  request_withdrawal,
};

export default authService;
