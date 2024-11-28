import { privacyInfos } from "@/lib/utils";
import TOC from "./TOC";
import { Element } from "react-scroll";

const PrivacyDetails = () => {
  return (
    <div className="mb-[58px] lg:flex flex-row-reverse gap-8 justify-center w-full lg:mt-20">
      <TOC />

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

        <div className="px-6">
          <ul className="list-decimal">
            {privacyInfos.map((privacyInfo) => (
              <Element
                name={`privacy-` + privacyInfo.id}
                key={privacyInfo.id}
                className="mt-4 md:mt-5 lg:mt-6"
              >
                <li className="font-bold text-sm md:text-[15px] lg:text-base">
                  {privacyInfo.title}
                </li>
                <ul className="list-disc mt-2 md:mt-4 lg:mt-6 leading-5 lg:leading-6 text-xs md:text-sm lg:text-base tracking-wide">
                  {privacyInfo.subInfos.map((subInfo, i) => (
                    <li key={i} className="mt-3">
                      <span className="font-medium">
                        {subInfo.subTitle ? subInfo.subTitle + ": " : ""}{" "}
                      </span>
                      {subInfo?.subtext}
                      {subInfo?.email ? (
                        <span className="text-[#008080]">
                          {" "}
                          [{subInfo.email}]
                        </span>
                      ) : (
                        ""
                      )}
                    </li>
                  ))}
                </ul>
              </Element>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyDetails;
