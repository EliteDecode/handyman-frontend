import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";

import { RootState, AppDispatch } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import useCountdown from "@/hooks/useCountDown";
import { emailOTP } from "@/lib/schema";
import { verifyEmail } from "@/services/features/auth/CustomerSignUpSlice";

const useVerifyEmail = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { isLoading, isError, message, isSuccess } = useSelector(
    (state: RootState) => state.customerSignUp
  );

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const resetTime = new Date().getTime() + 30000;
  const [timeLeft, setEndTime] = useCountdown(resetTime);
  const seconds = Math.floor(Number(timeLeft) / 1000) % 60;

  const formik = useFormik({
    initialValues: {
      code: Array.from({ length: 6 }).fill(""), // 6 inputs for OTP
    },
    validationSchema: emailOTP,
    onSubmit: async (values) => {
      const userOtp = { code: values.code.join("") };

      console.log(userOtp);

      dispatch(verifyEmail(userOtp));
    },
  });

  const arr: string[] | string | undefined | any = formik.errors.code;
  const singleError = arr?.find((item: any) => item !== undefined);

  // Handle input change and move focus to the next input
  const handleChange = (index: number, value: string) => {
    const currentPin = [...formik.values.code];
    currentPin[index] = value.slice(0, 1);

    formik.setFieldValue("code", currentPin); // Update the specific input value

    // Move focus to the next input only if the current value is filled
    if (value.length === 1 && index < formik.values.code.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle keydown events (for backspace)
  const handleKeyDown = (e: string, index: number) => {
    if (e === "Backspace" && index > 0 && formik.values.code[index] === "") {
      inputRefs.current[index - 1]?.focus(); // Move focus to the previous input on backspace
    }
  };

  return {
    formik,
    inputRefs,
    handleChange,
    handleKeyDown,
    seconds,
    message,
    isLoading,
    isError,
    singleError
  };
};

export default useVerifyEmail;
