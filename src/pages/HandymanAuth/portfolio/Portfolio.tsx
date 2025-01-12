import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProgressBarProps from "../completeYourProfile/ProgressBarProps";
import fileUpload from "@/assets/icons/fileUpload.svg";
import backIcon from "@/assets/icons/backIcon.svg";
import tag from "@/assets/icons/tag.svg";
import ApplicationSubmittedSuccessful from "../modals/ApplicationSubmittedSuccessful";

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleOpenModal();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <form className="max-w-[1440px] w-full mx-auto">
      <div className="lg:px-[120px] md:px-10 px-6 sm:pt-[80px] pt-8 sm:pb-[89px] pb-[30px]  ">
        <div className="flex flex-col w-full gap-4 mb-6">
          <h1 className="sm:text-[48px] text-[16px] sm:leading-[50.28px] leading-6 font-bold font-merriweather text-[#191919]">
            Portfolio
          </h1>
          <p className=" text-[#3C3C3C] sm:text-[24px] text-[12px] sm:leading-8 leading-5 sm:font-medium  font-lato">
            Upload photos of your past projects to highlight your expertise and
            build trust with potential clients. By sharing images of completed
            work, clients can see the quality and scope of your skills
            firsthands
          </p>
        </div>

        <ProgressBarProps progress={66.6} step={2} />

        <section className="flex flex-col  flex-grow w-full gap-6 p-4 mt-8 min-h-[510px] h-full md:flex-row">
          <div className="flex-grow w-full md:w-1/2">
            <div className="flex flex-col sm:gap-4 gap-2 font-lato text-[#191919]">
              <h1 className="sm:text-[24px] sm:leading-8 text-[14px] leading-5 font-medium">
                Upload photos of past work
              </h1>
              <p className="sm:text-[16px] leading-5 text-[12px] font-lato">
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

          <div className="flex-grow w-full md:w-1/2">
            <div className="flex flex-col gap-4 font-lato text-[#191919]">
              <h1 className="sm:text-[24px] sm:leading-8 text-[14px] leading-5 font-medium">
                Describe your project
              </h1>
              <p className="sm:text-[16px] leading-5 text-[12px] tracking-2-percent">
                Add a short description for each uploaded image. Explain what
                the project entailed, what services you performed, and the
                outcome.
              </p>
            </div>

            <textarea
              className="resize-none h-[159px] w-full border border-[#D0D5DD] rounded-[8px] mt-6 px-4 py-[19px] placeholder:text-[12px] placeholder:leading-5 sm:placeholder:text-[14px]"
              placeholder="Give a brief description of your project."></textarea>

            <div className="flex flex-col gap-3 mt-2 sm:mt-4">
              <p className="sm:text-[16px] text-[12px] leading-5 text-[#191919]">
                Use tags to categorize your projects by the type of service or
                specialization.
              </p>
              <div className="sm:w-[106px] w-[91px] sm:h-10 h-9 bg-[#B8B8B869] rounded-[8px] flex items-center justify-center gap-[11.2px] cursor-pointer">
                <img
                  src={tag}
                  alt="tag"
                  className="w-[11.99px] h-[11.33px] sm:w-[17.99px] sm:h-[17px]"
                />
                <p className="sm:text-[16px] text-[14px] leading-5 text-[#3C3C3C] font-medium">
                  Add Tag
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* buttons */}
        <div className="flex flex-col gap-8 mt-6 sm:gap-14 sm:mt-8">
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-[194px] h-14 bg-[#008080] rounded-[8px] text-[#FFFFFF] font-semibold text-[16px] leading-6 font-lato"
              onClick={handleSubmit}>
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
      <ApplicationSubmittedSuccessful
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </form>
  );
};

export default Portfolio;
