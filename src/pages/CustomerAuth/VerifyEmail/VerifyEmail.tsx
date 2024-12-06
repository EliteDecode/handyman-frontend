import messageImg from "@/assets/images/Message.png";
import useVerifyEmail from "@/hooks/useVerifyEmail";
import { Link } from "react-router-dom";
const VerifyEmail = () => {
  const {
    formik,
    inputRefs,
    seconds,
    handleChange,
    handleKeyDown,
    message,
    isLoading,
    singleError
  } = useVerifyEmail();

  return (
    <section className="mt-12 lg:mt-28 lg:mb-16 px-6 lg:flex flex-col items-center justify-center">
      <nav className="flex gap-2 items-center justify-center">
        <div className="w-12 h-1 bg-[#008080] rounded-lg"></div>
        <div className="w-12 h-1 bg-[#98A2B3] rounded-lg"></div>
      </nav>

      <div className="border border-[#D0D5DD] rounded-xl p-6 lg:p-14 mt-6 drop-shadow-lg flex flex-col justify-center items-center lg:w-[792px]">
        <img src={messageImg} alt="message" className="w-[120px] lg:w-[170px] mt-12" />

        <div className="mt-8 flex flex-col justify-center items-center">
          <h2 className="font-merriweather font-bold text-2xl text-center lg:text-[32px] leading-10">
            Verify your Email Address
          </h2>
          <p className="mt-6 text-center text-xs lg:text-lg leading-5 tracking-wide max-w-[334px] lg:max-w-[676px] lg:leading-6">
            You’re almost there! Please, check your inbox and enter the
            verification code below to verify your email address. {""}
            <span className="text-[#B3261E] lg:leading-8 lg:text-xl">
              Code expires in 00:{seconds < 10 ? `0${seconds}` : seconds}
            </span>
          </p>
        </div>

        <form
          className="mt-6 lg:mt-14 w-full flex flex-col items-center"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex items-center gap-3">
            {formik.values.code.map((_, index) => (
              <input
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e.key, index)}
                type="text"
                className={`${formik.touched.code && formik.errors.code ? "border-[#E26E6A]" : ""} w-8 h-8 lg:w-20 lg:h-20 lg:text-2xl rounded-md border border-[#D0D5DD] outline-none text-center !appearance-none`}
                maxLength={1}
              />
            ))}
          </div>
          {formik.touched.code && formik.errors.code ? (
            <div className="text-red-500 text-[10px] lg:text-xs font-semibold mt-2">
              {singleError}
            </div>
          ) : null}
          <p className="text-center text-xs mt-6 lg:text-lg tracking-wide">
            I didn't get a code?{" "}
            <span className="text-[#008080] font-semibold">Resend Code</span>
          </p>
          <button
            type="submit"
            disabled={isLoading}
            className={`${!formik.dirty || !formik.isValid || isLoading ? "bg-[#D0D5DD]" : "bg-[#008080]"} w-full lg:w-[472px] h-8 lg:h-14 rounded-lg text-white mt-8 text-xs lg:text-lg font-semibold outline-none`}
          >
            {isLoading ? "Please wait..." : "Verify"}
          </button>
        </form>

        {message && (
          <p className="text-sm text-[#B3261E] tracking-wide text-center mt-6">
            {message}
          </p>
        )}
      </div>

      <div className="mt-4 text-center text-xs tracking-wide">
        Already have an account?{" "}
        <Link to="/login" className="text-[#008080]">
          Login
        </Link>
      </div>
    </section>
  );
};

export default VerifyEmail;
