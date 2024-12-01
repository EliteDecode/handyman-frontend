import { privacyInfos } from "@/lib/demoData";
import TOC from "./TOC";
import PolicyDetails from "./PolicyDetails";
import { privacyLinks } from "@/lib/utils";

const PrivacyDetails = () => {
  return (
    <div className="mb-[58px] lg:flex flex-row-reverse gap-8 justify-center w-full lg:mt-20">
      <TOC policyLinks={privacyLinks} />

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

        <PolicyDetails PolicyInfos={privacyInfos} />
      </div>
    </div>
  );
};

export default PrivacyDetails;
