import axios from "axios";

export const baseURL = "https://handyman-backend-4sb0.onrender.com/handyman/v1";

const axiosClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("");
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !originalRequest?._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("");
      try {
        const response = await axios.post("", {
          token: refreshToken,
        });
        const newAccessToken = response.data.data.accessToken;
        localStorage.setItem("", newAccessToken);
        axios.defaults.headers.common["Authorization"] =
          `Bearer ${newAccessToken}`;
        return axiosClient(originalRequest);
      } catch (err) {
        console.log(err);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
