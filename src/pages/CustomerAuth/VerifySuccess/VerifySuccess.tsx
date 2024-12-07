import congratsImg from "@/assets/images/success.png";
import { Link } from "react-router-dom";

const VerifySuccess = () => {
  return (
    <div className="mt-12 md:mt-20 lg:mt-28 lg:mb-16 px-6 lg:flex flex-col items-center justify-center">
      <nav className="flex gap-2 items-center justify-center">
        <div className="w-12 h-1 bg-[#98A2B3] rounded-lg"></div>
        <div className="w-12 h-1 bg-[#008080] rounded-lg"></div>
      </nav>

      <div className="border border-[#D0D5DD] rounded-xl p-6 md:p-10 lg:p-14 mt-6 drop-shadow-lg flex flex-col justify-center items-center lg:w-[792px]">
        <div className="flex flex-col justify-center items-center w-[334px] lg:w-[729px]">
          <div className="mt-6">
            <img
              src={congratsImg}
              alt="congrats"
              className="w-[120px] md:w-[217px] lg:w-[314px]"
            />
          </div>
          <div className="mt-8 lg:mt-24 text-center">
            <h2 className="font-merriweather font-bold md:text-3xl lg:text-5xl">
              You're All Set!
            </h2>

            <p className="font-medium text-sm md:text-lg lg:text-2xl tracking-wide leading-[17px] mt-6">
              Congratulations! Your email has been verified. You now have full
              access to all features. Let’s get started!
            </p>
          </div>

          <Link to='/login' className="w-full flex items-center justify-center md:w-[540px] lg:w-[472px] bg-[#008080] h-8 md:h-11 lg:h-14 rounded-lg text-xs md:text-sm lg:text-lg font-semibold text-white mt-8 md:mt-10 lg:mt-12 outline-none">
            Continue to your account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifySuccess;
