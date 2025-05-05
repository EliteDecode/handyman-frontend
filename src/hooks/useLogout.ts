import {
  logout,
  reset,
  resetToken,
} from "@/services/features/auth/CustomerAuthSlice";
import { AppDispatch, RootState } from "@/store";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { isLogoutLoading, isError, message, isSuccess } = useSelector(
    (state: RootState) => state.customerAuth
  );

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess && message === "Logout successful") {
      toast.success(message);
      dispatch(resetToken());
      navigate("/auth/login", { replace: true });
    }
    if (
      message === "Error logging out user: Refresh token not found" ||
      message === "Access Denied" ||
      message === "Invalid Token"
    ) {
      localStorage.removeItem("HM_access_token");
      localStorage.removeItem("HM_refresh_token");
      localStorage.removeItem("HM_user_info");
      localStorage.removeItem("isProfileUpdated");
      dispatch(resetToken());

      navigate("/auth/login", { replace: true });
    }

    dispatch(reset());
    return;
  }, [isSuccess, isError]);

  const logoutBtn = () => {
    dispatch(logout());
  };
  return { logoutBtn, isLogoutLoading };
};

export default useLogout;
