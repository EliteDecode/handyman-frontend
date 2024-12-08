import bg from "@/assets/images/login-bg.png";
import LoginForm from "@/components/LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover w-full min-h-screen flex flex-col justify-center items-center p-6"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-white rounded-xl py-8 px-6 w-full">
        <div className="">
          <h2 className="font-bold text-center font-merriweather text-base">
            Login to <span className="text-[#008080]">Handyman</span>
          </h2>
          <p className="text-xs text-center tracking-wide mt-4">
            Don’t have an account?{" "}
            <Link to="/sign-up" className="text-[#008080]">
              Create an account
            </Link>
          </p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
