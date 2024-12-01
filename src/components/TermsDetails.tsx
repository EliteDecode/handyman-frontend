import { termsInfos, termsLinks } from "@/lib/utils"
import PolicyDetails from "./PolicyDetails"
import TOC from "./TOC"

const TermsDetails = () => {
  return (
    <div className="mb-[58px] lg:flex flex-row-reverse gap-8 justify-center w-full lg:mt-20">
      <TOC policyLinks={termsLinks} />

      <div className="px-6 md:mt-10 lg:mt-0 lg:w-[760px]">
        <div>
          <h2 className="font-semibold font-lato md:text-lg ">
            Thank you for choosing Handyman.
          </h2>

          <p className="mt-2 md:mt-3 lg:mt-4 text-xs md:text-base lg:text-xl font-medium font-lato leading-[14px] lg:leading-[30px]">
            Your privacy is important to us, and this Privacy Policy explains
            how we collect, use, and protect your information when you use our
            web app to connect with service providers.
          </p>
        </div>

        <PolicyDetails PolicyInfos={termsInfos} />

        <p className="text-xs md:text-base lg:text-lg font-lato leading-4 md:leading-5 lg:leading-6 font-semibold mt-4 md:mt-5 lg:mt-6">
          By using Handyman, you acknowledge that you have read, understood, and
          agree to abide by these terms.
        </p>
      </div>
    </div>
  );
}

export default TermsDetails