import CustomerSignUpForm from "@/components/CustomerSignUpForm";
import CustomerSignUpHead from "@/components/CustomerSignUpHead";
import { Toaster } from "react-hot-toast";

const SignUp = () => {
  return (
    <section className="bg-center bg-no-repeat bg-cover w-full bg-signup_bg lg:bg-none lg:py-[120px]">
      <Toaster />
      <div className="bg-black/45 lg:bg-inherit min-h-screen px-6 md:flex md:flex-col lg:flex-row justify-center items-center gap-6 pb-10 lg:pb-0">
        <CustomerSignUpHead />

        <CustomerSignUpForm />
      </div>
    </section>
  );
};

export default SignUp;