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
    ),
});

export const forgetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

export const resetPasswordSchema = Yup.object().shape({
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
});

export const completeProfileSchema = Yup.object().shape({
  address: Yup.string()
    .min(5, "Address must be at least 5 character long")
    .required("Address is required"),
  state: Yup.string().required("State is required"),
  lga: Yup.string().required("LGA is required"),
  firstname: Yup.string()
    .required("First name is required")
    .min(2, "Name must be at least 2 characters"),
  lastname: Yup.string()
    .required("Last name is required")
    .min(2, "Name must be at least 2 characters"),
  phone: Yup.string()
    .min(10, "Phone number must be at least 11 characters")
    .max(15, "Phone number should be less than 15 characters long.")
    .matches(/^\d+$/, "Only numbers are allowed")
    .required("Phone number is required"),
  gender: Yup.string().required("State is required"),
});

export const handyMansignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "Name must be at least 3 characters")
    .max(25, "Name cannot exceed 25 characters"),
  lastName: Yup.string()
    .required("Last name is required")
    .min(2, "Name must be at least 3 characters")
    .max(25, "Name cannot exceed 25 characters"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  gender: Yup.string().required("Gender is required"),
  phoneNumber: Yup.string()
    .min(11, "Phone number must be at least 11 characters")
    .max(15, "Phone number should be less than 15 characters long.")
    .matches(/^\d+$/, "Only numbers are allowed")
    .required("Phone number is required"),
  state: Yup.string().required("State is required"),
  lga: Yup.string().required("Local Government is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export const handyManCYPSchema = Yup.object().shape({
  profileImage: Yup.mixed()
    .nullable()
    .required("Profile image is required")
    .test("fileType", "Only image files are allowed", (value) => {
      return (
        !value || // Allow null/undefined if the field is optional
        (value instanceof File &&
          ["image/jpeg", "image/png", "image/jpg"].includes(value.type))
      );
    })
    .test("fileSize", "File size must be less than 5MB", (value) => {
      return !value || (value instanceof File && value.size <= 5 * 1024 * 1024);
    }),
  selectedCategories: Yup.array()
    .min(1, "Please select at least one category")
    .of(Yup.string().required("Category is required")),
  aboutMe: Yup.string()
    .required("About me is required")
    .min(10, "About me must be at least 10 characters")
    .max(500, "About me cannot exceed 500 characters"),
  serviceDescription: Yup.string()
    .required("Service description is required")
    .min(20, "Service description must be at least 20 characters")
    .max(1000, "Service description cannot exceed 1000 characters"),
  bankName: Yup.string().required("Bank Name is required"),
  accountNumber: Yup.string()
    .required("Account Number is required")
    .matches(/^\d{10}$/, "Account Number must be 10 digits"),

  accountName: Yup.string().required(
    "Enter your account details to confirm your name"
  ),
  guarantorsName: Yup.string()
    .required("Guarantor's Name is required")
    .max(100, "Guarantor's Name cannot exceed 100 characters"),
  guarantorsPhoneNumber: Yup.string()
    .required("Guarantor's Phone Number is required")
    .matches(/^\d{11}$/, "Phone Number must be 11 digits"),
  guarantorsRelationship: Yup.string().required(
    "Guarantor's Relationship is required"
  ),
  YOE: Yup.string().required("Year's of experience is required"),
  days: Yup.array()
    .min(1, "Select at least one working day")
    .required("Working days are required"),

  startTime: Yup.string()
    .required("Start time is required")
    .test("is-valid-time", "Invalid start time format", (value) =>
      /^([01]\d|2[0-3]):([0-5]\d)$/.test(value)
    ),

  endTime: Yup.string()
    .required("End time is required")
    .test("is-valid-time", "Invalid end time format", (value) =>
      /^([01]\d|2[0-3]):([0-5]\d)$/.test(value)
    )
    .test(
      "is-after-startTime",
      "End time must be later than start time",
      function (value) {
        const { startTime } = this.parent;
        return startTime && value && value > startTime;
      }
    ),
  priceRange: Yup.number()
    .required("Price range is required")
    .min(0, "Price cannot be negative"),
});

export const handyManVerificationAndIdentificationSchema = Yup.object().shape({
  idType: Yup.string().required("Identification type is required"),
  certificationsType: Yup.string().required("Identification type is required"),
  idImage: Yup.mixed()
    .nullable()
    .required("Identification image is required")
    .test("fileType", "Only image files are allowed", (value) => {
      return (
        !value || // Allow null/undefined if the field is optional
        (value instanceof File &&
          ["image/jpeg", "image/png", "image/jpg"].includes(value.type))
      );
    })
    .test("fileSize", "File size must be less than 5MB", (value) => {
      return !value || (value instanceof File && value.size <= 5 * 1024 * 1024);
    }),
  certificationsImage: Yup.mixed()
    .nullable()
    .required("Certifications image is required")
    .test("fileType", "Only image files are allowed", (value) => {
      return (
        !value || // Allow null/undefined if the field is optional
        (value instanceof File &&
          ["image/jpeg", "image/png", "image/jpg"].includes(value.type))
      );
    })
    .test("fileSize", "File size must be less than 5MB", (value) => {
      return !value || (value instanceof File && value.size <= 5 * 1024 * 1024);
    }),
});

export const handyManPorfolioSchema = Yup.object().shape({
  workImage: Yup.array()
    .of(
      Yup.mixed()
        .nullable()
        .test(
          "fileType",
          "Only JPEG, JPG, and PNG files are allowed",
          (value) => {
            return (
              !value || // Allow null/undefined if optional
              typeof value === "string" || // Allow base64 strings
              (value instanceof File &&
                ["image/jpeg", "image/png", "image/jpg"].includes(value.type))
            );
          }
        )
        .test("fileSize", "Each image must be less than 5MB", (value) => {
          return (
            !value ||
            typeof value === "string" || // Base64 strings don’t have size, assume valid
            (value instanceof File && value.size <= 5 * 1024 * 1024)
          );
        })
    )
    .min(1, "At least one image is required")
    .max(3, "You can upload up to 3 images") // Adjusted max limit to 3
    .required("Work image is required"),

  projectDescription: Yup.string()
    .required("Project description is required")
    .min(20, "Project description must be at least 20 characters")
    .max(1000, "Project description cannot exceed 1000 characters"),
  tags: Yup.array()
    .min(1, "At least one tag is required")
    .max(5, `Max ${5} tags allowed`),
});

export const jobDetailsSchema = Yup.object().shape({
  street: Yup.string()
    .min(5, "Street must be at least 5 character long")
    .required("Street is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  lga: Yup.string().required("LGA is required"),
  country: Yup.string().required("Country is required"),
  zipCode: Yup.string().required("Zip Code is required"),
});

export const changePasswordHandyManSecuritySchema = Yup.object().shape({
  currentPassword: Yup.string()
    .required("Current password is required")
    .min(8, "Current password must be at least 8 characters long")
    .matches(
      /[A-Z]/,
      "Current password must contain at least one uppercase letter"
    )
    .matches(/[0-9]/, "Current password must contain at least one number")
    .matches(
      /[\W_]/,
      "Current password must contain at least one special character (e.g., $, &, @, etc.)"
    ),

  newPassword: Yup.string()
    .required("New password is required")
    .min(8, "New password must be at least 8 characters long")
    .matches(/[A-Z]/, "New password must contain at least one uppercase letter")
    .matches(/[0-9]/, "New password must contain at least one number")
    .matches(
      /[\W_]/,
      "New password must contain at least one special character (e.g., $, &, @, etc.)"
    )
    .notOneOf(
      [Yup.ref("currentPassword")],
      "New password cannot be the same as the current password"
    ), // Custom validation

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Please confirm your password"),
});
