import bg from "@/assets/images/login-bg.png";
import LoginForm from "@/components/LoginForm";
import { Link } from "react-router-dom";
import LoginFooter from "@/components/LoginFooter";

const Login = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover w-full min-h-screen flex flex-col justify-center items-center p-6"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-white rounded-xl py-8 lg:py-10 lg:px-12 px-6 w-full lg:w-[690px]">
        <div className="">
          <h2 className="font-bold text-center font-merriweather text-base lg:text-[40px] leading-10">
            Login to <span className="text-[#008080]">Handyman</span>
          </h2>
          <p className="text-xs lg:text-lg lg:font-medium text-center tracking-wide mt-4 lg:mt-6">
            Don’t have an account?{" "}
            <Link to="/sign-up" className="text-[#008080]">
              Create an account
            </Link>
          </p>
        </div>

        <LoginForm />

        <LoginFooter />
      </div>
    </div>
  );
};

export default Login;
