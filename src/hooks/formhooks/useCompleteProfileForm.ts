import { useFormik } from "formik";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { reset } from "@/services/features/auth/CustomerAuthSlice";
import { completeProfileSchema } from "@/lib/schema";
import statefile from "@/lib/states_lgas.json";
import { updateProfile } from "@/services/features/user/userSlice";

const useCompleteProfileForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { isLoading, isError, message, isSuccess } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess) {
      toast.success(message);
      formik.resetForm();
      navigate("/dashboard");
    }
    dispatch(reset());
    return;
  }, [isSuccess, isError]);

  const formik = useFormik({
    initialValues: {
      address: "",
      state: "",
      lga: "",
      firstname: "",
      lastname: "",
      phone: "",
      gender: "",
    },
    validationSchema: completeProfileSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(updateProfile(values));
    },
  });

  const getLGAs = (stateName: string) => {
    const state = statefile.find((item) => item.state === stateName);
    return state ? state.lgas : [];
  };

  return { formik, isLoading, getLGAs, statefile };
};

export default useCompleteProfileForm;
