import bg from "@/assets/images/login-bg.png";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover w-full min-h-screen flex flex-col justify-center items-center p-6"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-white rounded-xl py-8 lg:py-10 lg:px-12 px-6 w-full md:w-[540px] lg:w-[690px]">
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="font-bold text-center font-merriweather text-base  md:text-xl lg:text-2xl leading-10">
            Reset Your Password
          </h2>
          <p className="text-xs md:text-sm lg:text-lg lg:font-medium text-center tracking-wide mt-4 lg:mt-6 lg:w-[398px]">
            Create a new password for your acciunt.
          </p>
        </div>

        <ResetPasswordForm />
      </div>
    </div>
  );
};

export default ResetPassword;
