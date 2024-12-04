import CustomerSignUpForm from "@/components/CustomerSignUpForm";

const SignUp = () => {
  return (
    <section className="bg-center bg-no-repeat bg-cover w-full bg-signup_bg lg:bg-none lg:py-[120px]">
      <div className="bg-black/45 lg:bg-inherit min-h-screen px-6 md:flex md:flex-col lg:flex-row justify-center items-center gap-6 pb-10 lg:pb-0">
        <div className="pt-28 text-white w-[264px] lg:bg-signup_bg bg-center bg-no-repeat bg-cover md:w-[540px] rounded-xl lg:pt-0">
          <div className="lg:bg-black/45 lg:h-[760px] relative rounded-xl">
            <div className="lg:absolute bottom-[124px] left-7">
              <h2 className="font-merriweather font-bold text-2xl lg:text-[32px] leading-10">
                Join Handyman
              </h2>
              <p className="mt-4 text-sm font-medium tracking-wide leading-4 lg:text-2xl md:w-[304px] lg:w-[389px]">
                Connect with skilled handymen for any home improvement need.
              </p>
            </div>
          </div>
        </div>

        <CustomerSignUpForm />
      </div>
    </section>
  );
};

export default SignUp;
