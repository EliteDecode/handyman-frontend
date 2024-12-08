import * as Yup from "yup";

export const contactMessageSchema = Yup.object().shape({
  fullname: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .min(10, "Phone number must be at least 11 characters")
    .max(15, "Phone number should be less than 15 characters long.")
    .matches(/^\d+$/, "Only numbers are allowed")
    .notRequired(),
  title: Yup.string()
    .min(3, "Title should be at least 3 characters long.")
    .max(50, "Title should be less than 150 characters long.")
    .notRequired(),
  message: Yup.string()
    .min(3, "Message name should be at least 3 characters long.")
    .max(150, "Message name should be less than 150 characters long.")
    .notRequired(),
});

export const customerSignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[\W_]/,
      "Password must contain at least one special character (e.g., $, &, @, etc.)"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
  terms: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("You must accept the terms and conditions"),
});

export const emailOTPSchema = Yup.object().shape({
  code: Yup.array().of(
    Yup.string().matches(/^\d$/, "Must be a digit").required("Required")
  ),
});
export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[\W_]/,
      "Password must contain at least one special character (e.g., $, &, @, etc.)"
    )
});