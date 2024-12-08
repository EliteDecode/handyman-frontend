import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { toast } from "react-hot-toast";
import { login, reset } from "@/services/features/auth/CustomerSignUpSlice";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "@/lib/schema";

const useLoginForm = () => {
  const [togglePassword, setTogglePassword] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { isLoading, isError, message, isSuccess } = useSelector(
    (state: RootState) => state.customerSignUp
  );
    useEffect(() => {
      if (isError) toast.error(message);
      if (isSuccess) {
        toast.success(message);
        formik.resetForm();
        navigate("/verify-email");
      }
      dispatch(reset());
      return;
    }, [isSuccess, isError]);

    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: (values) => {
        console.log("values: ",values)
        // dispatch(login(values));
      },
    });

  return {
    formik,
    isLoading,
    togglePassword,
    setTogglePassword,
  };
};

export default useLoginForm;
