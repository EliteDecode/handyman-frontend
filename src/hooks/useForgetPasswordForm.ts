import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { toast } from "react-hot-toast";
import { forgetPassword, reset } from "@/services/features/auth/CustomerAuthSlice";
import { useNavigate } from "react-router-dom";
import { forgetPasswordSchema } from "@/lib/schema";

const useForgetPasswordForm = () => {
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
      navigate("/auth/reset-password");
    }
    dispatch(reset());
    return;
  }, [isSuccess, isError]);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgetPasswordSchema,
    onSubmit: (values) => {
      dispatch(forgetPassword(values));
    },
  });
  return { formik, message, isLoading };
};

export default useForgetPasswordForm;
