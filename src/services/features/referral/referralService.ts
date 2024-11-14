import axiosClient from "@/services/api/axiosClient";

import { IReferral } from "@/types/referral.types";

const add_referrals = async (referral: IReferral) => {
  const response = await axiosClient.post(`/referral`, referral);
  return response.data;
};

const fetch_referral_details = async () => {
  const response = await axiosClient.get(`/referral`);

  if (response.data.success === true) {
    localStorage.setItem("BST_referrals", JSON.stringify(response.data.data));
  }
  return response.data;
};

const fetch_single_referral_details = async (referralId: string) => {
  const response = await axiosClient.get(`/referral/${referralId}`);
  return response.data;
};

const update_referral_details = async (referralData: IReferral) => {
  const { _id, ...referralInfo } = referralData;
  const response = await axiosClient.put(`/referral/${_id}`, referralInfo);

  return response.data;
};

const delete_referral_details = async (referralId: string) => {
  const response = await axiosClient.delete(`/referral/${referralId}`);
  return response.data;
};

const authService = {
  add_referrals,
  fetch_referral_details,
  update_referral_details,
  delete_referral_details,
  fetch_single_referral_details,
};

export default authService;
