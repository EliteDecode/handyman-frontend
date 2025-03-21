import { useState, useEffect } from "react";
import ProgressBarProps from "../completeYourProfile/ProgressBarProps";
import fileUpload from "@/assets/icons/fileUpload.svg";
import cancelWithCircle from "@/assets/icons/cancelWithCircle.svg";
import addGreen from "@/assets/icons/addGreen.svg";
import ApplicationSubmittedSuccessful from "../modals/ApplicationSubmittedSuccessful";

import InputPillWithFormik from "@/components/auth/InputPillWithFormik";
import { useFormik } from "formik";
import { handyManPorfolioSchema } from "@/lib/schema";
import toast from "react-hot-toast";

const MAX_IMAGES = 3; // Maximum allowed images

const Portfolio = () => {
  const formik = useFormik({
    initialValues: {
      workImage: [],
      projectDescription: "",
      tags: [],
    },
    validationSchema: handyManPorfolioSchema,
    onSubmit: (values) => {
      console.log(values);
      handleSubmit();
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (formik.values.workImage.length > 0) {
      setSelectedImage(formik.values.workImage[0]);
    }
  }, [formik.values.workImage]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = () => {
    handleOpenModal();
  };

  const handleFileChangeWorkImage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const newImagesPromises = Array.from(files).map((file) => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        });
      });

      Promise.all(newImagesPromises).then((newImages) => {
        let updatedImages = [...formik.values.workImage, ...newImages];

        // Check if images exceed the max limit
        if (updatedImages.length > MAX_IMAGES) {
          toast.error(`You can only upload up to ${MAX_IMAGES} images.`);
          updatedImages = updatedImages.slice(0, MAX_IMAGES); // Keep only the first 3
        }

        formik.setFieldValue("workImage", updatedImages);
        setSelectedImage(updatedImages[0]); // Set the first image as selected
      });
    }
  };

  const handleFileRemoveWorkImage = (index: number) => {
    const updatedImages = [...formik.values.workImage];
    updatedImages.splice(index, 1); // Remove the selected image

    formik.setFieldValue("workImage", updatedImages);

    // If no images left, clear the preview

    setSelectedImage(updatedImages.length > 0 ? updatedImages[0] : "");
  };

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
                Upload any certifications or licenses related to your
                profession.
              </p>
            </div>

            <div className="max-w-[588px] w-full max-h-[338px] min-h-[256px] overflow-scroll h-full border-dashed border-2 border-[#3C3C3C] rounded-[8px] flex items-center justify-center flex-col sm:mt-6 mt-4 relative">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Uploaded"
                  className="object-cover rounded-[8px] w-full h-full"
                />
              ) : (
                <>
                  <img
                    src={fileUpload}
                    alt="file Upload Icon"
                    className="w-16 h-16"
                  />
                  <p className="sm:mt-6 mt-4 sm:text-[18px] sm:leading-6 text-[12px] leading-5 text-[#191919] font-lato">
                    Drag and drop document or photo here
                  </p>
                  <input
                    name="workImage"
                    id="workImage"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    multiple
                    onChange={handleFileChangeWorkImage}
                  />
                  <label
                    htmlFor="workImage"
                    className="sm:w-[125px] sm:h-14 w-[109px] h-9 bg-[#008080] rounded-[8px] text-[#FFFFFF] font-semibold sm:text-[16px] sm:leading-6 text-[14px] leading-5 font-lato sm:mt-8 mt-6 flex items-center justify-center cursor-pointer"
                  >
                    Select file
                  </label>
                </>
              )}
            </div>

            <div className="flex flex-col w-full gap-4 mt-4">
              <div className="flex flex-wrap w-full h-full gap-2">
                {formik.values.workImage.map((img, index) => (
                  <div
                    key={index}
                    className={`w-[120px] h-[120px] border-2 rounded-md cursor-pointer overflow-hidden relative ${
                      selectedImage === img
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSelectedImage(img)}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index}`}
                      className="object-cover w-full h-full"
                    />
                    <img
                      src={cancelWithCircle}
                      alt="Cancel"
                      className="absolute top-0 right-0 p-1 bg-white rounded-full shadow-md cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation(); // ✅ Prevents event bubbling
                        handleFileRemoveWorkImage(index);
                      }}
                    />
                  </div>
                ))}
              </div>

              {formik.values.workImage.length > 0 &&
                formik.values.workImage.length < 3 && (
                  <div>
                    <label
                      htmlFor="workImage"
                      className="flex items-center cursor-pointer"
                    >
                      <img src={addGreen} alt="Add another" />
                      <p className="text-[#008080] text-[14px] font-semibold">
                        Add Another Image
                      </p>
                    </label>
                    <input
                      type="file"
                      id="workImage"
                      className="hidden"
                      accept="image/*"
                      multiple
                      onChange={handleFileChangeWorkImage}
                    />
                  </div>
                )}
            </div>
            <div className="text-xs text-[#B3261E]">
              {formik.touched.workImage && formik.errors.workImage}
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
