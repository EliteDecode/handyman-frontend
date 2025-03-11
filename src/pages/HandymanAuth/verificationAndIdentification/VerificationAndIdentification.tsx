import fileUpload from "@/assets/icons/fileUpload.svg";
import dropDown from "@/assets/icons/dropDown.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBarProps from "../completeYourProfile/ProgressBarProps";
import { useFormik } from "formik";
import { handyManVerificationAndIdentificationSchema } from "@/lib/schema";

const VerificationAndIdentification = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formik = useFormik<verificationAndIdentificationFormValues>({
    initialValues: {
      idType: "",
      certificationsType: "",
      idImage: null,
      certificationsImage: null,
    },
    validationSchema: handyManVerificationAndIdentificationSchema,
    onSubmit: (values) => {
      console.log(values);
      navigate("/auth/portfolio");
    },
  });

  const handleFileChangeIdImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      formik.setFieldValue("idImage", file);
    }
  };

  const handleFileChangeCertificationsImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      formik.setFieldValue("certificationsImage", file);
    }
  };

  const handleFileRemoveIdImage = () => {
    formik.setFieldValue("idImage", null);
  };

  const handleFileRemoveCertificationsImage = () => {
    formik.setFieldValue("certificationsImage", null);
  };
  return (
    <form
      className="max-w-[1440px] w-full mx-auto"
      onSubmit={formik.handleSubmit}
    >
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
          <div className="w-full md:w-1/2">
            <div className="flex flex-col sm:gap-4 gap-2 font-lato text-[#191919]">
              <h1 className="sm:text-[24px] sm:leading-8 text-[14px] leading-5 font-medium">
                Upload valid identification
              </h1>
              <p className="sm:text-[16px] leading-5 text-[12px]">
                This can be a government-issued ID such as a driver's license,
                national ID, or passport.
              </p>
            </div>

            <div className="flex flex-col gap-1 my-6">
              <label className="text-[16px] leading-6 font-medium font-lato tracking-2-percent text-[#191919]">
                Select ID type
              </label>

              <div className="relative w-full">
                <select
                  className={`h-9 sm:h-14 w-full border-[#98A2B3] border rounded-[6px] px-4 placeholder:text-[14px] sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080] appearance-none bg-white ${formik.touched.idType && formik.errors.idType ? "border-red-500" : ""}`}
                  name="idType"
                  id="idType"
                  value={formik.values.idType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option className="text-[#98A2B3]" value="" disabled>
                    Select ID type
                  </option>
                  <option>National Identity Number (NIN)</option>
                  <option>International Passport</option>
                  <option>Driver's License</option>
                  <option>Permanent Voter's Card (PVC)</option>
                  <option>Others</option>
                </select>
                <div className="absolute inset-y-0 flex items-center pointer-events-none right-3">
                  <img src={dropDown} alt="dropdown" />
                </div>
              </div>
              <div className="text-xs text-[#B3261E] min-h-4">
                {formik.touched.idType && formik.errors.idType}
              </div>
            </div>

            <div
              className={`max-w-[588px] w-full max-h-[338px] min-h-[256px] overflow-scroll h-full border-dashed border-2 border-[#3C3C3C] rounded-[8px] flex items-center justify-center flex-col sm:mt-6 mt-4 relative ${formik.touched.idImage && formik.errors.idImage ? "border-red-500" : ""}`}
            >
              {formik.values.idImage ? (
                <div className="w-full h-full">
                  <img
                    src={URL.createObjectURL(formik.values.idImage)}
                    alt="Uploaded ID"
                    className="object-cover rounded-[8px]"
                  />
                  <div className="absolute top-0 right-0 flex gap-2 p-2">
                    <button
                      className="px-3 py-1 text-white transition bg-red-800 rounded-md hover:text-red-900 hover:bg-white"
                      onClick={handleFileRemoveIdImage}
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
                    Upload ID, NIN or Passport here{" "}
                  </p>
                  <div>
                    <input
                      name="idImage"
                      id="idImage"
                      onChange={handleFileChangeIdImage}
                      type="file"
                      className="hidden"
                      accept="image/*"
                    />
                    <label
                      htmlFor="idImage"
                      className="sm:w-[125px] sm:h-14 w-[109px] h-9  bg-[#008080] rounded-[8px] text-[#FFFFFF] font-semibold sm:text-[16px] sm:leading-6 text-[14px] leading-5 font-lato sm:mt-8 mt-6 flex items-center justify-center cursor-pointer"
                    >
                      Select file
                    </label>
                  </div>
                </>
              )}
            </div>

            <div className="text-xs text-[#B3261E] min-h-4">
              {formik.touched.idImage && formik.errors.idImage}
            </div>

            <div className="flex items-center justify-between sm:text-[14px] text-[12px] leading-5 text-[#3C3C3C] font-medium font-lato sm:mt-4 mt-2">
              <p>Supported Format: jpg and png</p>
              <p>500kb max file size</p>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-4 font-lato text-[#191919]">
              <h1 className="sm:text-[24px] sm:leading-8 text-[14px] leading-5 font-medium">
                Provide relevant certifications
              </h1>
              <p className="sm:text-[16px] leading-5 text-[12px]">
                Upload any certifications or licenses related to your profession
                to boost your profile and stand out to clients.
              </p>
            </div>

            <div className="flex flex-col gap-1 my-6">
              <label className="text-[16px] leading-6 font-medium font-lato tracking-2-percent text-[#191919]">
                Select type
              </label>

              <div className="relative w-full">
                <select
                  className={`h-9 sm:h-14 w-full border-[#98A2B3] border rounded-[6px] px-4 placeholder:text-[14px] sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080] appearance-none bg-white ${formik.touched.certificationsType && formik.errors.certificationsType ? "border-red-500" : ""}`}
                  name="certificationsType"
                  id="certificationsType"
                  value={formik.values.certificationsType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option className="text-[#98A2B3]" value="" disabled>
                    Select type
                  </option>
                  <option>Certifications</option>
                  <option>License</option>
                  <option>Others</option>
                </select>
                <div className="absolute inset-y-0 flex items-center pointer-events-none right-3">
                  <img src={dropDown} alt="dropdown" />
                </div>
              </div>
              <div className="text-xs text-[#B3261E] min-h-4">
                {formik.touched.certificationsType &&
                  formik.errors.certificationsType}
              </div>
            </div>

            <div
              className={`max-w-[588px] w-full max-h-[338px] overflow-scroll  min-h-[256px] h-full border-dashed border-2 border-[#3C3C3C] rounded-[8px] flex items-center justify-center flex-col sm:mt-6 mt-4 relative ${formik.touched.certificationsImage && formik.errors.certificationsImage ? "border-red-500" : ""}`}
            >
              {formik.values.certificationsImage ? (
                <div className="w-full h-full">
                  <img
                    src={URL.createObjectURL(formik.values.certificationsImage)}
                    alt="Uploaded ID"
                    className="max-h-full max-w-full object-contain rounded-[8px]"
                  />
                  <div className="absolute top-0 right-0 flex gap-2 p-2">
                    <button
                      className="px-3 py-1 text-white transition bg-red-800 rounded-md hover:text-red-900 hover:bg-white"
                      onClick={handleFileRemoveCertificationsImage}
                    >
                      Removes
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
                    Upload ID, NIN or Passport here{" "}
                  </p>
                  <div>
                    <input
                      name="certificationsImage"
                      id="certificationsImage"
                      onChange={handleFileChangeCertificationsImage}
                      type="file"
                      className="hidden"
                      accept="image/*"
                    />
                    <label
                      htmlFor="certificationsImage"
                      className="sm:w-[125px] sm:h-14 w-[109px] h-9  bg-[#008080] rounded-[8px] text-[#FFFFFF] font-semibold sm:text-[16px] sm:leading-6 text-[14px] leading-5 font-lato sm:mt-8 mt-6 flex items-center justify-center cursor-pointer"
                    >
                      Select file
                    </label>
                  </div>
                </>
              )}
            </div>

            <div className="text-xs text-[#B3261E] min-h-4">
              {formik.touched.certificationsImage &&
                formik.errors.certificationsImage}
            </div>

            <div className="flex items-center justify-between sm:text-[14px] text-[12px] leading-5 text-[#3C3C3C] font-medium font-lato sm:mt-4 mt-2">
              <p>Supported Format: jpg and png</p>
              <p>500kb max file size</p>
            </div>
          </div>
        </section>
      </div>
      <div className="flex items-center justify-center mb-10">
        <button
          type="submit"
          className="w-[194px] h-14 bg-[#008080] rounded-[8px] text-[#FFFFFF] font-semibold text-[16px] leading-6 font-lato"
        >
          Save and Continue
        </button>
      </div>
    </form>
  );
};
export default VerificationAndIdentification;
