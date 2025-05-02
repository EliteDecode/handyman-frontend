import { useNavigate } from "react-router-dom";
import statefile from "@/lib/states_lgas.json";
import { useFormik } from "formik";
import { jobDetailsSchema } from "@/lib/schema";
import { useState } from "react";

const useJobDetailsForm = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState<boolean>(false)

  const formik = useFormik({
    initialValues: {
      street: "",
      city: "",
      country: "",
      state: "",
      lga: "",
      zipCode: "",
    },
    validationSchema: jobDetailsSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const getLGAs = (stateName: string) => {
    const state = statefile.find((item) => item.state === stateName);
    return state ? state.lgas : [];
  };
  return { navigate, getLGAs, statefile, formik, showModal, setShowModal};
};

export default useJobDetailsForm;
