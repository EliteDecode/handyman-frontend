import { useFormik } from "formik";
import { resetPasswordSchema } from "@/lib/schema";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { toast } from "react-hot-toast";
import {
  reset,
  resetPassword,
} from "@/services/features/auth/CustomerAuthSlice";
import { useNavigate } from "react-router-dom";

const useResetPasswordForm = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleCPassword, setToggleCPassword] = useState(false);

  const token = localStorage.getItem("token");

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { isLoading, isError, message, isSuccess } = useSelector(
    (state: RootState) => state.customerAuth
  );

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess) {
      toast.success(message);
      formik.resetForm();
      navigate("/auth/login");
    }
    dispatch(reset());
    return;
  }, [isSuccess, isError]);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: (values) => {
      const { password, confirmPassword } = values;
      const userData = { password, confirmPassword, token };
      console.log(userData);

      dispatch(resetPassword(userData));
    },
  });
  return {
    formik,
    isLoading,
    message,
    togglePassword,
    toggleCPassword,
    setTogglePassword,
    setToggleCPassword,
  };
};

export default useResetPasswordForm;
