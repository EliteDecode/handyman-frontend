import VerifyEmailForm from "@/components/VerifyEmailForm";
import { Link } from "react-router-dom";
const VerifyEmail = () => {
  return (
    <section className="mt-12 lg:mt-28 lg:mb-16 px-6 lg:flex flex-col items-center justify-center">
      <VerifyEmailForm />

      <div className="mt-4 text-center text-xs md:text-sm tracking-wide lg:text-lg ">
        Already have an account?{" "}
        <Link to="/login" className="text-[#008080]">
          Login
        </Link>
      </div>
    </section>
  );
};

export default VerifyEmail;
