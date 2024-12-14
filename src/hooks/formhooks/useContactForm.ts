import { contactMessageSchema } from "@/lib/schema";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  reset,
  sendMessage,
} from "../../services/features/support/supportSlice";
import { RootState, AppDispatch } from "@/store";

const useContactForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { isLoading, isError, message, isSuccess } = useSelector(
    (state: RootState) => state.support
  );

  useEffect(() => {
    if (isError) alert(message);
    if (isSuccess) alert("Submitted Successfully");
    dispatch(reset());
    return;
  }, [isSuccess, isError]);

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      phone: "",
      title: "",
      message: "",
    },
    validationSchema: contactMessageSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(sendMessage(values));
      resetForm();
    },
  });
  return { formik, isLoading };
};

export default useContactForm;
