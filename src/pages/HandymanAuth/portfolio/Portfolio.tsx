import { useState, useEffect } from "react";
import ProgressBarProps from "../completeYourProfile/ProgressBarProps";
import fileUpload from "@/assets/icons/fileUpload.svg";
import ApplicationSubmittedSuccessful from "../modals/ApplicationSubmittedSuccessful";

import InputPillWithFormik from "@/components/auth/InputPillWithFormik";
import { useFormik } from "formik";
import { handyManPorfolioSchema } from "@/lib/schema";

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formik = useFormik<porfolioFormValues>({
    initialValues: {
      workImage: null,
      projectDescription: "",
      tags: [],
    },
    validationSchema: handyManPorfolioSchema,
    onSubmit: (values) => {
      console.log(values);
      handleSubmit();
    },
  });

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = () => {
    handleOpenModal();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFileChangeWorkImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      formik.setFieldValue("workImage", file);
    }
  };

  const handleFileRemoveWorkImage = () => {
    formik.setFieldValue("workImage", null);
  };

  console.log(formik.errors);
  return (
    <form
      className="max-w-[1440px] w-full mx-auto"
      onSubmit={formik.handleSubmit}
    >
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

            <div
              className={`max-w-[588px] w-full max-h-[338px] min-h-[256px] overflow-scroll h-full border-dashed border-2 border-[#3C3C3C] rounded-[8px] flex items-center justify-center flex-col sm:mt-6 mt-4 relative ${formik.touched.workImage && formik.errors.workImage ? "border-red-500" : ""}`}
            >
              {formik.values.workImage ? (
                <div className="w-full h-full">
                  <img
                    src={URL.createObjectURL(formik.values.workImage)}
                    alt="Uploaded "
                    className="object-cover rounded-[8px]"
                  />
                  <div className="absolute top-0 right-0 flex gap-2 p-2">
                    <button
                      className="px-3 py-1 text-white transition bg-red-800 rounded-md hover:text-red-900 hover:bg-white"
                      onClick={handleFileRemoveWorkImage}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ) : (
                <>
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
                      name="workImage"
                      id="workImage"
                      onChange={handleFileChangeWorkImage}
                      type="file"
                      className="hidden"
                      accept="image/*"
                    />
                    <label
                      htmlFor="workImage"
                      className="sm:w-[125px] sm:h-14 w-[109px] h-9  bg-[#008080] rounded-[8px] text-[#FFFFFF] font-semibold sm:text-[16px] sm:leading-6 text-[14px] leading-5 font-lato sm:mt-8 mt-6 flex items-center justify-center cursor-pointer"
                    >
                      Select file
                    </label>
                  </div>
                </>
              )}
            </div>

            <div className="text-xs text-[#B3261E] min-h-4">
              {formik.touched.workImage && formik.errors.workImage}
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
              placeholder="Give a brief description of your project."
              value={formik.values.projectDescription}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="projectDescription"
              id="projectDescription"
            ></textarea>

            <div className="text-xs text-[#B3261E] min-h-4">
              {formik.touched.projectDescription &&
                formik.errors.projectDescription}
            </div>

            <p className="sm:text-[16px] text-[12px] leading-5 text-[#191919] mt-2 sm:mt-4">
              Use tags to categorize your projects by the type of service or
              specialization.
            </p>

            <div className="flex flex-row w-full gap-6 mt-2 sm:mt-4">
              <InputPillWithFormik
                name="tags"
                value={formik.values.tags}
                onChange={(newTags: string) =>
                  formik.setFieldValue("tags", newTags)
                }
                onBlur={() => formik.setFieldTouched("tags", true)}
                error={
                  formik.touched.tags && formik.errors.tags
                    ? formik.errors.tags
                    : ""
                }
              />
            </div>
          </div>
        </section>

        {/* buttons */}
        <div className="flex items-center justify-center mt-6 sm:mt-8">
          <button
            type="submit"
            className="w-[194px] h-14 bg-[#008080] rounded-[8px] text-[#FFFFFF] font-semibold text-[16px] leading-6 font-lato"
          >
            Continue
          </button>
        </div>
        <div className="flex flex-col gap-8 sm:gap-14 "></div>
      </div>
      <ApplicationSubmittedSuccessful
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </form>
  );
};

export default Portfolio;
