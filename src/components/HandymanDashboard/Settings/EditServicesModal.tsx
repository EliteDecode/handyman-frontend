import React, { useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface EditServicesModalProps {
  show: boolean;
  onClose: () => void;
  id: number;
  service: string;
  rate: number;
}

const EditServicesModal: React.FC<EditServicesModalProps> = ({
  show,
  onClose,
  id,
  service,
  rate,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    }

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show, onClose]);

  const formik = useFormik({
    initialValues: {
      service: service || "",
      rate: rate || "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      service: Yup.string().required("Service is required"),
      rate: Yup.number()
        .typeError("Rate must be a number")
        .required("Rate is required")
        .positive("Rate must be greater than zero"),
    }),
    onSubmit: (values) => {
      const rawRate = parseInt((values.rate as string).replace(/,/g, ""), 10);
      console.log(values, id, rawRate);
    },
  });

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center px-6">
      <div
        ref={modalRef}
        className="bg-white rounded-lg p-6 w-full max-w-[543px] shadow-xl relative px-8 py-[39px] space-y-6"
      >
        <div className="text-[24px] leading-[100%] font-semibold text-[#191919] font-merriweather h-10 border-b border-[#98A2B3]">
          Services
        </div>

        <form
          className="font-lato md:space-y-6 space-y-4"
          onSubmit={formik.handleSubmit}
        >
          {/* Service */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h6 className="text-[16px] leading-[100%] tracking-2-percent text-[#191919]">
                Edit service
              </h6>
              <p className="text-[12px] leading-6 tracking-2-percent text-[#3C3C3C]">
                This service will be updated on your profile
              </p>
            </div>

            <div className="flex flex-col gap-1 font-lato">
              <label className="text-[14px] sm:text-[16px] font-medium text-[#101928]">
                Service
              </label>
              <input
                name="service"
                id="service"
                value={formik.values.service}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Fill in your service name"
                className="h-9 sm:h-14 w-full border-[#98A2B3] border rounded-[6px] px-3 sm:px-4 text-[12px] sm:text-[14px] focus:outline-none focus:border-2 focus:border-[#008080]"
              />
              {formik.touched.service && formik.errors.service && (
                <div className="text-xs text-[#B3261E] min-h-[16px]">
                  {formik.errors.service}
                </div>
              )}
            </div>
          </div>

          {/* Rate */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h6 className="text-[16px] leading-[100%] tracking-2-percent text-[#191919]">
                Change rate
              </h6>
              <p className="text-[12px] leading-6 tracking-2-percent text-[#3C3C3C]">
                Please note that the new hourly rate will only apply to future
                booking
              </p>
            </div>

            <div className="flex flex-col gap-1 font-lato">
              <label className="text-[14px] sm:text-[16px] font-medium text-[#101928]">
                Rate
              </label>
              <input
                name="rate"
                id="rate"
                value={Number(formik.values.rate || 0).toLocaleString()} // format for display only
                onChange={(e) => {
                  const rawValue = e.target.value.replace(/,/g, ""); // remove commas
                  if (!/^\d*$/.test(rawValue)) return; // block non-digits
                  formik.setFieldValue("rate", rawValue); // store raw number only
                }}
                onBlur={formik.handleBlur}
                placeholder="₦5,000"
                maxLength={10}
                className="h-9 sm:h-14 w-full border-[#98A2B3] border rounded-[6px] px-3 sm:px-4 text-[12px] sm:text-[14px] focus:outline-none focus:border-2 focus:border-[#008080]"
              />

              <label className="text-[14px] text-[#98A2B3]">
                Total amount the client will see
              </label>
              {formik.touched.rate && formik.errors.rate && (
                <div className="text-xs text-[#B3261E] min-h-[16px]">
                  {formik.errors.rate}
                </div>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex md:flex-row flex-col gap-6 justify-end w-full">
            <button
              type="button"
              onClick={onClose}
              className="md:w-[102px] w-full md:h-14 h-12 text-[12px] md:text-[18px] font-semibold border-[1.5px] border-primary text-primary rounded-[8px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="md:w-[86px] w-full md:h-14 h-12 bg-primary text-white rounded-[8px] text-[12px] md:text-[18px] font-semibold"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditServicesModal;
