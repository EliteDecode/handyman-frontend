import CompleteProfileForm from "@/components/auth/CompleteProfileForm";

const CompleteProfile = () => {
  return (
    <section className="py-12 px-6 flex flex-col items-center justify-center">
      <div className="border border-[#D0D5DD] rounded-xl p-6 w-full xl:w-[1200px] ">
        <div className="">
          <h2 className="font-bold text-base font-merriweather lg:mt-2 lg:text-[40px] lg:leading-[50px] ">
            Complete Your Profile
          </h2>
          <p className="mt-4 text-xs tracking-wide leading-5 lg:text-xl ">
            Help us tailor your experience by providing a few more details.
          </p>
        </div>
        <div className="mt-6">
          <h2 className="mt-6 font-merriweather font-bold text-base lg:text2xl">
            Fill in the information below
          </h2>
        </div>

        <CompleteProfileForm />
      </div>
    </section>
  );
};

export default CompleteProfile;
