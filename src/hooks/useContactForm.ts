import { contactMessageSchema } from "@/lib/schema";
import { useFormik } from "formik";

const useContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: contactMessageSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("submitted: ",values), resetForm();
      alert("Submitted successfully")
    },
  });
  return { formik };
};

export default useContactForm;
