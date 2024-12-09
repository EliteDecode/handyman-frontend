import { customerSignUpSchema } from "@/lib/schema";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { toast } from "react-hot-toast";
import {
  customerSignUp,
  reset,
} from "@/services/features/auth/CustomerAuthSlice";
import { useNavigate } from "react-router-dom";

const useCustomerSignUpForm = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleCPassword, setToggleCPassword] = useState(false);

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
      navigate("/auth/verify-email");
    }
    dispatch(reset());
    return;
  }, [isSuccess, isError]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    validationSchema: customerSignUpSchema,
    onSubmit: (values) => {
      const { confirmPassword, email, password } = values;
      const userData = { email, password, confirmPassword };
      dispatch(customerSignUp(userData));
    },
  });

  return {
    formik,
    isLoading,
    togglePassword,
    toggleCPassword,
    setTogglePassword,
    setToggleCPassword,
  };
};

export default useCustomerSignUpForm;
