import bg from "@/assets/images/login-bg.png";
import ForgetPasswordForm from "@/components/auth/ForgetPasswordForm";

const ForgetPassword = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover w-full min-h-screen flex flex-col justify-center items-center p-6"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-white rounded-xl py-8 lg:py-10 lg:px-12 px-6 w-full md:w-[540px] lg:w-[690px]">
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="font-bold text-center font-merriweather text-base  md:text-xl lg:text-2xl leading-10">
            Forget your password?
          </h2>
          <p className="text-xs md:text-sm lg:text-lg lg:font-medium text-center tracking-wide mt-4 lg:mt-6 lg:w-[398px]">
            Enter your email address and we’ll send you a link to reset your
            password.
          </p>
        </div>

        <ForgetPasswordForm />
      </div>
    </div>
  );
};

export default ForgetPassword;
