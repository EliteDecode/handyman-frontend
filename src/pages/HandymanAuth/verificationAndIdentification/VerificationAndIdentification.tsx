import backIcon from "@/assets/icons/backIcon.svg";
import fileUpload from "@/assets/icons/fileUpload.svg";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProgressBarProps from "../completeYourProfile/ProgressBarProps";

const VerificationAndIdentification = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <form className="max-w-[1440px] w-full mx-auto">
      <div className="sm:pt-[80px] pt-8 sm:pb-[89px] pb-[30px] lg:px-[120px] md:px-10 px-6">
        <div className="flex flex-col w-full gap-4 mb-6">
          <h1 className="sm:text-[48px] text-[16px] sm:leading-[50.28px] leading-6 font-bold font-merriweather text-[#191919]">
            Verification & Identification
          </h1>
          <p className=" text-[#3C3C3C] sm:text-[24px] text-[12px] sm:leading-8 leading-5 sm:font-medium  font-lato">
            To ensure trust and safety on our platform, we require all handymen
            to complete a simple verification process. This helps us maintain a
            network of reliable, skilled professionals and provides clients with
            peace of mind when hiring you for jobs.
          </p>
        </div>

        <ProgressBarProps progress={66.6} step={2} />

        <section className="flex flex-col flex-grow w-full gap-6 p-4 mt-8 min-h-[510px] h-full md:flex-row">
          <div className="flex-grow w-full md:w-1/2">
            <div className="flex flex-col sm:gap-4 gap-2 font-lato text-[#191919]">
              <h1 className="sm:text-[24px] sm:leading-8 text-[14px] leading-5 font-medium">
                Upload valid identification
              </h1>
              <p className="sm:text-[16px] leading-5 text-[12px]">
                This can be a government-issued ID such as a driver's license,
                national ID, or passport.
              </p>
            </div>

            <div className="max-w-[588px] w-full max-h-[338px] min-h-[256px] h-full border-dashed border-2 border-[#3C3C3C] rounded-[8px] flex items-center justify-center flex-col sm:mt-6 mt-4">
              <img
                src={fileUpload}
                alt="file Upload Icon"
                className="w-[24px] h-[29.33px] sm:w-16 sm:h-16"
              />
              <p className="sm:mt-6 mt-4 sm:text-[18px] sm:leading-6 text-[12px] leading-5 text-[#191919] font-lato">
                Upload ID, NIN or Passport here{" "}
              </p>
              <div>
                <input
                  type="file"
                  id="file-input"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files) {
                      // Handle file selection logic here
                      console.log("Selected file:", e.target.files[0]);
                    }
                  }}
                />
                <label
                  htmlFor="file-input"
                  className="sm:w-[125px] sm:h-14 w-[109px] h-9  bg-[#008080] rounded-[8px] text-[#FFFFFF] font-semibold sm:text-[16px] sm:leading-6 text-[14px] leading-5 font-lato sm:mt-8 mt-6 flex items-center justify-center cursor-pointer">
                  Select file
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between sm:text-[14px] text-[12px] leading-5 text-[#3C3C3C] font-medium font-lato sm:mt-4 mt-2">
              <p>Supported Format: jpg and png</p>
              <p>500kb max file size</p>
            </div>
          </div>

          <div className="flex-grow w-full md:w-1/2">
            <div className="flex flex-col gap-4 font-lato text-[#191919]">
              <h1 className="sm:text-[24px] sm:leading-8 text-[14px] leading-5 font-medium">
                Provide relevant certifications
              </h1>
              <p className="sm:text-[16px] leading-5 text-[12px]">
                Upload any certifications or licenses related to your profession
                to boost your profile and stand out to clients.
              </p>
            </div>

            <div className="max-w-[588px] w-full max-h-[338px] min-h-[256px] h-full border-dashed border-2 border-[#3C3C3C] rounded-[8px] flex items-center justify-center flex-col sm:mt-6 mt-4">
              <img
                src={fileUpload}
                alt="file Upload Icon"
                className="w-[24px] h-[29.33px] sm:w-16 sm:h-16"
              />
              <p className="sm:mt-6 mt-4 sm:text-[18px] sm:leading-6 text-[12px] leading-5 text-[#191919] font-lato">
                Drag and drop document or photo here
              </p>
              <div>
                <input
                  type="file"
                  id="file-input"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files) {
                      // Handle file selection logic here
                      console.log("Selected file:", e.target.files[0]);
                    }
                  }}
                />
                <label
                  htmlFor="file-input"
                  className="sm:w-[125px] sm:h-14 w-[109px] h-9  bg-[#008080] rounded-[8px] text-[#FFFFFF] font-semibold sm:text-[16px] sm:leading-6 text-[14px] leading-5 font-lato sm:mt-8 mt-6 flex items-center justify-center cursor-pointer">
                  Select file
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between sm:text-[14px] text-[12px] leading-5 text-[#3C3C3C] font-medium font-lato sm:mt-4 mt-2">
              <p>Supported Format: jpg and png</p>
              <p>500kb max file size</p>
            </div>
          </div>
        </section>

        {/* buttons */}
        <div className="flex flex-col gap-8 mt-6 sm:gap-14 sm:mt-8">
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-[194px] h-14 bg-[#008080] rounded-[8px] text-[#FFFFFF] font-semibold text-[16px] leading-6 font-lato">
              Save and Continue
            </button>
          </div>

          <div className="flex items-center justify-between cursor-pointer">
            <div
              className="flex items-center gap-[10px]"
              onClick={() => navigate(-1)}>
              <img src={backIcon} alt="back" />
              <p>Back</p>
            </div>

            <Link to="/auth/portfolio">
              <button className="w-[82px] h-14 bg-[#008080] rounded-[8px] text-[#FFFFFF] font-semibold text-[16px] leading-6 font-lato">
                Skip
              </button>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default VerificationAndIdentification;
