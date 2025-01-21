import {
  LoginWithFacebook,
  LoginWithGoogle,
  reset,
} from "@/services/features/auth/CustomerAuthSlice";
import { AppDispatch } from "@/store";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const useSignInOptions = () => {
    const { isSuccess, isError, message, isLoading } = useSelector(
      (state: any) => state.auth
    );

    const navigate = useNavigate();

    const dispatch = useDispatch<AppDispatch>();

    const handleLoginWithGoogle = (code: { code: string }) => {
      dispatch(LoginWithGoogle(code));
    };

    const handleLoginWithFacebook = (code: { code: string }) => {
      dispatch(LoginWithFacebook(code));
    };

    useEffect(() => {
      if (isSuccess && message === "Login successfully") {
        dispatch(reset());
      }

      if (isError && message) {
        toast.error(message);
        navigate("/auth/login");
        dispatch(reset());
      }
    }, [isSuccess, isError, message, dispatch]);

  return {
    handleLoginWithFacebook,
    handleLoginWithGoogle,
    isLoading,
  };
};

export default useSignInOptions;
